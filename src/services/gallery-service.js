import { GalleryRepository } from '../repositories/index.js';

export const createGalleryItemService = async (data = {}) => {
  if (!data.mediaUrl) {
    throw { status: 400, message: 'mediaUrl is required' };
  }

  const payload = {
    title: data.title || null,
    caption: data.caption || null,
    mediaType: data.mediaType ? data.mediaType.toUpperCase() : 'IMAGE',
    mediaUrl: data.mediaUrl,
    category: data.category || 'General',
    isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
  };

  return await GalleryRepository.createGalleryItemRepo(payload);
};

export const getAllGalleryItemsService = async (category) => {
  return await GalleryRepository.getAllGalleryItemsRepo(category);
};

export const getGalleryItemByIdService = async (id) => {
  const item = await GalleryRepository.getGalleryItemByIdRepo(id);
  if (!item) {
    throw { status: 404, message: 'Gallery item not found' };
  }
  return item;
};

export const updateGalleryItemService = async (id, data = {}) => {
  await getGalleryItemByIdService(id);

  const updateData = {};
  if (data.title !== undefined) updateData.title = data.title;
  if (data.caption !== undefined) updateData.caption = data.caption;
  if (data.mediaType) updateData.mediaType = data.mediaType.toUpperCase();
  if (data.mediaUrl) updateData.mediaUrl = data.mediaUrl;
  if (data.category) updateData.category = data.category;
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

  return await GalleryRepository.updateGalleryItemRepo(id, updateData);
};

export const deleteGalleryItemService = async (id) => {
  await getGalleryItemByIdService(id);
  return await GalleryRepository.deleteGalleryItemRepo(id);
};