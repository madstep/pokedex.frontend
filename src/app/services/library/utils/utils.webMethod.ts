import { ErrorWebMethod, PropertiesWebMethod } from '../interfaces/interface.webMethod';

export function PromiseWebMethod<T>(dataServer: PropertiesWebMethod): Promise<T> {
  return new Promise<T>((resolve, reject) => {
      try {
          $.ajax({
              type: 'json',
              url: dataServer.Url,
              data: dataServer.Data,
              contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              success: data => resolve(JSON.parse(data.d)),
              error: (xhr, ajaxOptions, thrownError) => {
                  const objError: ErrorWebMethod = new Error(thrownError);
                  objError.Ajax = { xhr, ajaxOptions, thrownError };
                  reject(objError);
              },
          });
      } catch (error) {
          console.error('utils.webMethod.ts/PromiseWebMethod/Promise =>', error);
          reject(error);
      }
  });
}
