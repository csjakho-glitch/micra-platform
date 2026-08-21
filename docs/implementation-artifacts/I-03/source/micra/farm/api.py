from dataclasses import asdict
from .service import FarmService

class FarmAPI:
    """Framework-neutral application API contract for I-03C."""
    def __init__(self, service=None):
        self.service = service or FarmService()

    def create(self, principal, farm_id, name):
        return asdict(self.service.create_farm(principal, farm_id, name))

    def get(self, principal, farm_id):
        farm = self.service.get_farm(principal, farm_id)
        return None if farm is None else asdict(farm)
