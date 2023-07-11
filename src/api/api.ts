/* istanbul ignore file */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import { _storage } from './localStorage';
import apiResponses, { apiErrorResponses } from './apiTypes';
import { PUBLIC_API_TOKEN, PUBLIC_API_URL } from '@/utils/consts';

export const minValidityRetry = 1;

const axiosClient = axios.create({
  baseURL: PUBLIC_API_URL,
});

function apiRequest<Type extends keyof apiResponses>(
  id: Type,
  axiosOptions?: AxiosRequestConfig
): Promise<AxiosResponse<apiResponses[Type], any>> {
  return axiosClient.request({
    url: apiUrls[id],
    ...axiosOptions,
  });
}

export { apiRequest };

function useApi<Type extends keyof apiResponses & keyof apiErrorResponses>(
  id: Type,
  axiosOptions?: AxiosRequestConfig,
  keys?: QueryKey,
  cacheTime?: number,
  staleTime?: number,
  queryOptions?: Omit<
    UseQueryOptions<
      AxiosResponse<apiResponses[Type], any>,
      AxiosError<apiErrorResponses[Type]>,
      AxiosResponse<apiResponses[Type], any>,
      Type | QueryKey[]
    >,
    'queryKey' | 'queryFn'
  >
): UseQueryResult<AxiosResponse<apiResponses[Type], any>, AxiosError<apiErrorResponses[Type]>> {
  const dependencies = keys ? [id, keys] : id;
  const configCache = cacheTime ? cacheTime : 0;
  const configStale = staleTime ? staleTime : 0;
  return useQuery(
    dependencies,
    ({ signal }) => {
      return axiosClient.request({
        url: apiUrls[id],
        ...axiosOptions,
        headers: {
          Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
          ...axiosOptions?.headers,
        },
        signal,
      });
    },
    {
      cacheTime: configCache,
      staleTime: configStale,
      onSuccess: (data) => {
        if (cacheTime)
          _storage.set('oversoft.' + dependencies, {
            data: data.data,
            status: data.status,
            statusText: data.statusText,
            updatedAt: Date.now(),
          });
      },
      initialData: () => {
        const state = _storage.get('oversoft.' + dependencies);
        if (state) {
          if (Date.now() - state.updatedAt <= configCache) {
            return state;
          } else {
            _storage.remove('oversoft.' + dependencies);
          }
        }
      },
      ...queryOptions,
    }
  );
}

export default useApi;

function useApiMutation<Type extends keyof apiResponses>(
  id: Type,
  axiosOptions?: AxiosRequestConfig,
  mutationOptions?: Omit<
    UseMutationOptions<AxiosResponse<apiResponses[Type], any>, AxiosError<apiErrorResponses[Type]>, unknown, unknown>,
    'mutationFn'
  >
): UseMutationResult<AxiosResponse<apiResponses[Type], any>, AxiosError<apiErrorResponses[Type]>> {
  return useMutation((mutationAxiosOptions) => {
    return axiosClient.request({
      url: apiUrls[id],
      ...axiosOptions,
      ...(mutationAxiosOptions as AxiosRequestConfig),
      headers: {
        Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
        ...axiosOptions?.headers,
        ...(mutationAxiosOptions as AxiosRequestConfig)?.headers,
      },
    });
  }, mutationOptions);
}

export { useApiMutation };

export const apiUrls: { [api in keyof apiResponses]: string } = {
  // Security Api
  'post-login': '/api/Security/Login', // bodyParams: {esDatoSistema: boolean, nombreUsuario: string, clave: string, subdominio: string, fromManager: boolean, cultura: string}

  // User Api
  'get-valid-users': '/api/Usuario/UsuariosValidos',
};
