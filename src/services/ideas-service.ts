import { ApiController } from '../utils/api-controller';
import { SERVER_URL } from '../utils/consts';

class Service {
  generate = async (startupTheme?: string) => {
    return await ApiController.post({
      url: `${ SERVER_URL }/ideas/`,
      body: {
        startupTheme,
      },
    });
  };
}

const ideasService = new Service();

export { ideasService };
