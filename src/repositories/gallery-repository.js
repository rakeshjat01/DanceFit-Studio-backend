import prisma from '../config/prismaClient.js';

export const createGalleryItemRepo = async (data) => {
  return await prisma.galleryItem.create({ data });
};

export const getAllGalleryItemsRepo = async (category) => {
  const where = { isActive: true };
  if (category) {
    where.category = category;
  }
  
  return await prisma.galleryItem.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
};

export const getGalleryItemByIdRepo = async (id) => {
  return await prisma.galleryItem.findUnique({ where: { id } });
};

export const updateGalleryItemRepo = async (id, data) => {
  return await prisma.galleryItem.update({
    where: { id },
    data,
  });
};

export const deleteGalleryItemRepo = async (id) => {
  return await prisma.galleryItem.delete({ where: { id } });
};