import { StatusCodes } from 'http-status-codes';
import { BlogService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createBlog = async (req, res, next) => {
  try {
    const blog = await BlogService.createBlogService(req.body);
    SuccessResponse.message = 'Blog created successfully';
    SuccessResponse.data = blog;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllBlogs = async (req, res, next) => {
  try {
    const { category } = req.query;
    const blogs = await BlogService.getAllBlogsService(category);
    SuccessResponse.message = 'Blogs fetched successfully';
    SuccessResponse.data = blogs;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getBlogById = async (req, res, next) => {
  try {
    const blog = await BlogService.getBlogByIdService(req.params.id);
    SuccessResponse.message = 'Blog fetched successfully';
    SuccessResponse.data = blog;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await BlogService.updateBlogService(req.params.id, req.body);
    SuccessResponse.message = 'Blog updated successfully';
    SuccessResponse.data = updatedBlog;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const deletedBlog = await BlogService.deleteBlogService(req.params.id);
    SuccessResponse.message = 'Blog deleted successfully';
    SuccessResponse.data = deletedBlog;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};