export interface PostDTO {
  id: number
  userId: number
  title: string
  body: string
}

export interface CreatePostDTO {
  userId: number
  title: string
  body: string
}
export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface UserDTO {
  id: string
  username: string
  name: string
  registeredAt: string
}

export interface LoginDTO {
  username: string
  password: string
}

export interface SignUpDTO {
  username: string
  password: string
  name: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface ContentDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  postedBy: UserDTO
  createdAt: string
  updatedAt: string
  status: string
  profileUrl: string
}

export interface ContentsDTO {
  data: ContentDTO[]
}

export interface ErrorDTO {
  statusCode: number
  message: string
  error: string
}

export interface CreateContentDTO {
  videoUrl: string
  comment: string
  rating: number
}

export interface UpdateContentDTO {
  comment: string
  rating: number
}

export interface SliderDTO {
  Image: string
  heading: string
  desc: string
}

export interface CourseDTO {
  header: string
  newPage: string
  description: string
  tags: string[]
  author: string
  date: string
  readingTime: string
  url: string
}

export interface InterviweDTO {
  thumbnailUrl: string
  description: string
  user: string
  date: string
}

export interface UserInfoDTO {
  profileUrl: string
  name: string
  work: string
  datepost: string
  statususer: string
}
