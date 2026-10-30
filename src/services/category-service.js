import { CategoryRepository } from '../repositories/index.js';

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const createCategoryService = async (data = {}) => {
  if (!data.name) {
    throw { status: 400, message: 'Category name is required' };
  }

  const slug = data.slug ? generateSlug(data.slug) : generateSlug(data.name);

  const payload = {
    name: data.name,
    slug,
    isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
  };

  return await CategoryRepository.createCategoryRepo(payload);
};

export const getAllCategoriesService = async () => {
  return await CategoryRepository.getAllCategoriesRepo();
};

export const getCategoryByIdService = async (id) => {
  const category = await CategoryRepository.getCategoryByIdRepo(id);
  if (!category) {
    throw { status: 404, message: 'Category not found' };
  }
  return category;
};

export const updateCategoryService = async (id, data = {}) => {
  await getCategoryByIdService(id);

  const updateData = {};
  if (data.name) {
    updateData.name = data.name;
    updateData.slug = generateSlug(data.slug || data.name);
  }
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);

  return await CategoryRepository.updateCategoryRepo(id, updateData);
};

export const deleteCategoryService = async (id) => {
  await getCategoryByIdService(id);
  return await CategoryRepository.deleteCategoryRepo(id);
};