class FarmRepository:
    """Deterministic in-memory persistence seam for I-03A/I-03B.

    This is deliberately a persistence abstraction, not a claim of PostgreSQL
    runtime verification. A real DB adapter can implement this contract later.
    """
    def __init__(self):
        self.farms = {}
        self.baselines = {}
        self.operational_states = {}

    def save_farm(self, farm):
        self.farms[farm.id] = farm
        return farm

    def get_farm(self, farm_id):
        return self.farms.get(farm_id)

    def save_baseline(self, baseline):
        self.baselines[baseline.id] = baseline
        return baseline

    def get_baseline(self, baseline_id):
        return self.baselines.get(baseline_id)

    def save_operational_state(self, state):
        self.operational_states[state.id] = state
        return state

    def get_operational_state(self, state_id):
        return self.operational_states.get(state_id)
