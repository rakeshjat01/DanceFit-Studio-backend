import prisma from '../config/prismaClient.js';
import { BlogRepository } from '../repositories/index.js';

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const createBlogService = async (data = {}) => {
  const { title, content, categoryId, coverImage, author, isActive, slug } = data;

  if (!title || !content || !categoryId) {
    throw { status: 400, message: 'title, content, and categoryId are required fields' };
  }

  // Verify category exists
  const categoryExists = await prisma.category.findUnique({ where: { id: categoryId } });
  if (!categoryExists) {
    throw { status: 404, message: 'Category not found with provided categoryId' };
  }

  const blogSlug = slug ? generateSlug(slug) : generateSlug(title);

  const existingBlog = await BlogRepository.getBlogBySlugRepo(blogSlug);
  if (existingBlog) {
    throw { status: 400, message: 'Blog with this title/slug already exists' };
  }

  const payload = {
    title,
    slug: blogSlug,
    content,
    categoryId,
    coverImage: coverImage || null,
    author: author || 'Admin',
    isActive: isActive !== undefined ? Boolean(isActive) : true,
  };

  return await BlogRepository.createBlogRepo(payload);
};

export const getAllBlogsService = async (categoryId) => {
  return await BlogRepository.getAllBlogsRepo(categoryId);
};

export const getBlogByIdService = async (id) => {
  const blog = await BlogRepository.getBlogByIdRepo(id);
  if (!blog) {
    throw { status: 404, message: 'Blog not found' };
  }
  return blog;
};

export const updateBlogService = async (id, data = {}) => {
  await getBlogByIdService(id);

  const updateData = {};
  if (data.title !== undefined) updateData.title = data.title;
  if (data.content !== undefined) updateData.content = data.content;
  if (data.coverImage !== undefined) updateData.coverImage = data.coverImage;
  if (data.author !== undefined) updateData.author = data.author;
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

  if (data.categoryId) {
    const categoryExists = await prisma.category.findUnique({ where: { id: data.categoryId } });
    if (!categoryExists) {
      throw { status: 404, message: 'Category not found' };
    }
    updateData.categoryId = data.categoryId;
  }

  if (data.title || data.slug) {
    updateData.slug = generateSlug(data.slug || data.title);
  }

  return await BlogRepository.updateBlogRepo(id, updateData);
};

export const deleteBlogService = async (id) => {
  await getBlogByIdService(id);
  return await BlogRepository.deleteBlogRepo(id);
};