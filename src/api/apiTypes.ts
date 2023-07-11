interface IValidUser {
  id: number;
  name: string;
}
export type { IValidUser };

type apiResponses = {
  'post-login': {};
  'get-valid-users': IValidUser[];
};

export default apiResponses;

type apiErrorResponses = {
  'post-login': unknown;
  'get-valid-users': unknown;
};
export type { apiErrorResponses };
