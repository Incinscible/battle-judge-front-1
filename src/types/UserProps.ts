export type UserTeamProps = {
  id: number;
  name: string;
} | null;

export type UserAPIProps = {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'participant' | 'judge';
};

export interface UserRegisterAPIProps extends UserAPIProps {
  teamId: null | number;
  password: string;
}

export interface UserInfoProps extends UserAPIProps {
  team: UserTeamProps;
  token: string | null;
}

export interface UserProfileProps extends UserInfoProps {
  teamSize: number;
}

export type BulkUsers = UserInfoProps[] | null;

export type UserUpdateFromAdmin = {
  username?: string;
  email?: string;
  team?: number;
  role?: string;
};

export type UserUpdateFromUser = {
  email?: string;
  team?: number;
  password?: string;
};
