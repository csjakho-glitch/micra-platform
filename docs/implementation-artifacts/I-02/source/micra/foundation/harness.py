class DeterministicHarness:
    def __init__(self):
        self.state = {}

    def reset(self):
        self.state.clear()

    def seed(self, fixture: dict):
        self.reset()
        self.state.update(fixture)
        return dict(self.state)
