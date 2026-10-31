import { ServiceRepository, ServiceCategoryRepository } from '../repositories/index.js';

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const createServiceService = async (data = {}) => {
  if (!data.name || !data.categoryId) {
    throw { status: 400, message: 'Service name and categoryId are required' };
  }

  // Validate if category exists
  const categoryExists = await ServiceCategoryRepository.getServiceCategoryByIdRepo(data.categoryId);
  if (!categoryExists) {
    throw { status: 404, message: 'Invalid categoryId. Service Category not found' };
  }

  const slug = data.slug ? generateSlug(data.slug) : generateSlug(data.name);

  const payload = {
    name: data.name,
    slug,
    description: data.description || null,
    icon: data.icon || null,
    order: data.order !== undefined ? Number(data.order) : 0,
    isActive: data.isActive !== undefined ? Boolean(data.isActive) : true,
    categoryId: data.categoryId,
  };

  return await ServiceRepository.createServiceRepo(payload);
};

export const getAllServicesService = async (onlyActive = true) => {
  return await ServiceRepository.getAllServicesRepo(onlyActive);
};

export const getServiceByIdService = async (id) => {
  const service = await ServiceRepository.getServiceByIdRepo(id);
  if (!service) {
    throw { status: 404, message: 'Service not found' };
  }
  return service;
};

export const updateServiceService = async (id, data = {}) => {
  await getServiceByIdService(id);

  if (data.categoryId) {
    const categoryExists = await ServiceCategoryRepository.getServiceCategoryByIdRepo(data.categoryId);
    if (!categoryExists) {
      throw { status: 404, message: 'Invalid categoryId. Service Category not found' };
    }
  }

  const updateData = {};
  if (data.name) {
    updateData.name = data.name;
    updateData.slug = generateSlug(data.slug || data.name);
  }
  if (data.description !== undefined) updateData.description = data.description;
  if (data.icon !== undefined) updateData.icon = data.icon;
  if (data.order !== undefined) updateData.order = Number(data.order);
  if (data.isActive !== undefined) updateData.isActive = Boolean(data.isActive);
  if (data.categoryId) updateData.categoryId = data.categoryId;

  return await ServiceRepository.updateServiceRepo(id, updateData);
};

export const deleteServiceService = async (id) => {
  await getServiceByIdService(id);
  return await ServiceRepository.deleteServiceRepo(id);
};