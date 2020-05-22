
class ChannelConfiguration(object):
    """A class represents channel configuration bytes."""

    def __init__(self, config=None, file_path=None):
        """Construct ChannelConfiguration by args.

        Args:
            config: raw config bytes
            file_path: config file path
        """
        self._config = None

        if file_path:
            with open(file_path, mode='rb') as file:
                self._config = file.read()

        if config:
            self._config = config

    @property
    def config(self):
        """Get config bytes.

        Returns: raw config bytes

        """
        return self._config

    @config.setter
    def config(self, config):
        """Set config bytes.

        Args:
            config: raw config bytes
        """
        self._config = config
