// resources/js/types.ts

export type AuthUser = {
  id: number;
  nama: string;
  username: string;
  divisi: string;
  golongan: string;
};

export type PageProps = {
  auth: {
    user: AuthUser | null;
  };
};
