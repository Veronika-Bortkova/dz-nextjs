import {IUser} from "@/src/models/UserModel";
import {baseUrl, targetUrl} from "@/src/constants/urls";

export const getAllUsers = async ():Promise<IUser[]> =>{
    const users = await fetch(targetUrl.usersUrl)
        .then(value => value.json())
    return users;
}

export const getUser = async (id:string):Promise<IUser> =>{
    const user = await fetch(targetUrl.usersUrl + "/" + id)
        .then(value => value.json())
    return user;
}

export const getAllPosts = async ():Promise<IPost[]> =>{
    const posts = await fetch(targetUrl.postsUrl)
        .then(value => value.json())
    return posts;
}

export const getPost = async (id:string): Promise<IPost> =>{
    const post = await fetch(targetUrl.postsUrl +"/" +id)
        .then(value => value.json())
    return post;
}

export const getAllComments = async ():Promise<IComment[]> =>{
    const comments = await fetch(targetUrl.commentsUrl)
        .then(value => value.json())
    return comments;
}

export const getComment = async (id:string):Promise<IComment> =>{
    const comment = await fetch(targetUrl.commentsUrl +"/" + id)
        .then(value => value.json())
    return comment;
}