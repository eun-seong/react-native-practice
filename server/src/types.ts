export type SocialType = 'naver' | 'kakao';
export const SocialTypes: SocialType[] = ['naver', 'kakao'];

interface socialUser {
  id: number;
  social_type: SocialType;
}

export interface NaverUser extends socialUser {
  name: string;
  email: string;
  social_type: 'naver';
  profile_image: string;
}
