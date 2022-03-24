# -*- coding: utf-8; -*-
# This file is part of Superdesk.
# For the full copyright and license information, please see the
# AUTHORS and LICENSE files distributed with this source code, or
# at https://www.sourcefabric.org/superdesk/license
#
# Author  : Jérôme
# Creation: 2021-03-15 14:40

from superdesk.commands.data_updates import DataUpdate
from superdesk import get_resource_service


class DataUpdate(DataUpdate):

    resource = "content_templates"
    desks_field = "template_desks"

    def forwards(self, mongodb_collection, mongodb_database):
        """Check templates to remove references to deleted desks (SDCP-488)"""
        desks_service = get_resource_service("desks")

        for template in mongodb_collection.find({}):
            desks = template.get(self.desks_field) or []
            to_delete = []
            for desk in desks:
                found = desks_service.find_one(req=None, _id=desk)
                if found is None:
                    to_delete.append(desk)
            if to_delete:
                print(f"found deleted desk(s) in template {template.get('template_name')!r}")
                desks = [d for d in desks if d not in to_delete]
                print(
                    mongodb_collection.update(
                        {"_id": template["_id"]},
                        {
                            "$set": {self.desks_field: desks},
                        },
                    )
                )
                print(f"template {template.get('template_name')!r} fixed")

    def backwards(self, mongodb_collection, mongodb_database):
        pass
