import { ServiceCategoryRepository } from '../repositories/index.js';

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const createServiceCategoryService = async (data = {}) => {
  if (!data.title) {
    throw { status: 400, message: 'Category title is required' };
  }

  const slug = data.slug ? generateSlug(data.slug) : generateSlug(data.title);

  const payload = {
    title: data.title,
    slug,
    description: data.description || null,
    order: data.order !== undefined ? Number(data.order) : 0,
    isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
  };

  return await ServiceCategoryRepository.createServiceCategoryRepo(payload);
};

export const getAllServiceCategoriesService = async (onlyActive = true) => {
  return await ServiceCategoryRepository.getAllServiceCategoriesRepo(onlyActive);
};

export const getServiceCategoryByIdService = async (id) => {
  const category = await ServiceCategoryRepository.getServiceCategoryByIdRepo(id);
  if (!category) {
    throw { status: 404, message: 'Service category not found' };
  }
  return category;
};

export const updateServiceCategoryService = async (id, data = {}) => {
  await getServiceCategoryByIdService(id);

  const updateData = {};
  if (data.title) {
    updateData.title = data.title;
    updateData.slug = generateSlug(data.slug || data.title);
  }
  if (data.description !== undefined) updateData.description = data.description;
  if (data.order !== undefined) updateData.order = Number(data.order);
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

  return await ServiceCategoryRepository.updateServiceCategoryRepo(id, updateData);
};

export const deleteServiceCategoryService = async (id) => {
  await getServiceCategoryByIdService(id);
  return await ServiceCategoryRepository.deleteServiceCategoryRepo(id);
};