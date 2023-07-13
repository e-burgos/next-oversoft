interface IBasicResponse {
  id: number;
  isSuccessful: boolean;
  statusCode: string;
  errorMessage: string;
  entityErrors: string | null;
  listErrors: string | null;
}
export type { IBasicResponse };

interface IUserItemById {
  disabled: boolean;
  group: string | null;
  selected: boolean;
  text: string;
  value: string;
}
interface IUserListItemByIds extends IBasicResponse {
  result: IUserItemById[];
}
export type { IUserListItemByIds, IUserItemById };

interface ILogin extends IBasicResponse {
  result: {
    token: string;
    expiration: string;
  };
}
export type { ILogin };

type apiResponses = {
  'post-login': ILogin;
  'get-valid-users': {};
  'get-users-list-items-by-ids': IUserListItemByIds;
};
export default apiResponses;

type apiErrorResponses = {
  'post-login': unknown;
  'get-valid-users': unknown;
  'get-users-list-items-by-ids': unknown;
};
export type { apiErrorResponses };
