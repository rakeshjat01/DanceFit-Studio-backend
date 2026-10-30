import prisma from '../config/prismaClient.js';

export const createBlogRepo = async (data) => {
  return await prisma.blog.create({
    data,
    include: { category: true },
  });
};

export const getAllBlogsRepo = async (categoryId) => {
  const where = { isActive: true };
  if (categoryId) {
    where.categoryId = categoryId;
  }
  return await prisma.blog.findMany({
    where,
    include: { category: true },
    orderBy: { createdAt: 'desc' },
  });
};

export const getBlogByIdRepo = async (id) => {
  return await prisma.blog.findUnique({
    where: { id },
    include: { category: true },
  });
};

export const getBlogBySlugRepo = async (slug) => {
  return await prisma.blog.findUnique({ where: { slug } });
};

export const updateBlogRepo = async (id, data) => {
  return await prisma.blog.update({
    where: { id },
    data,
    include: { category: true },
  });
};

export const deleteBlogRepo = async (id) => {
  return await prisma.blog.delete({ where: { id } });
};