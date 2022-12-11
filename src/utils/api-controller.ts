interface IRequest {
  url: string,
  method?: 'POST' | 'PUT' | 'DELETE',
  body?: Record<string, any>
}

const configureRequestParams = ({ method, body }: Pick<IRequest, 'method' | 'body'>): RequestInit => {
  const requestParams: RequestInit = {};

  if (method) {
    requestParams.method = method;
  }
  if (body) {
    requestParams.body = JSON.stringify(body);
  }

  return requestParams;
};


class Controller {
  request = async ({ url, method, body }: IRequest): Promise<Response> => {
    const requestParams = configureRequestParams({ method, body });

    const request = await fetch(url, requestParams);
    return request
  };

  get = async (params: Pick<IRequest, 'url'>) => {
    return this.request(params);
  };

  post = async (params: Pick<IRequest, 'url' | 'body'>) => {
    return this.request({ method: 'POST', ...params });
  };

  put = async (params: Pick<IRequest, 'url' | 'body'>) => {
    return this.request({ method: 'PUT', ...params });
  };

  delete = async (params: Pick<IRequest, 'url' | 'body'>) => {
    return this.request({ method: 'DELETE', ...params });
  };
}

const ApiController = new Controller();
export { ApiController };
