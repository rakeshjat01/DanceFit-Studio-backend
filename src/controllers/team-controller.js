import { StatusCodes } from 'http-status-codes';
import { TeamService } from '../services/index.js';
import { SuccessResponse } from '../utils/index.js';

export const createTeamMember = async (req, res, next) => {
  try {
    const member = await TeamService.createTeamMemberService(req.body);
    SuccessResponse.message = 'Team member added successfully';
    SuccessResponse.data = member;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getAllTeamMembers = async (req, res, next) => {
  try {
    const team = await TeamService.getAllTeamMembersService(req.query);
    SuccessResponse.message = 'Team members fetched successfully';
    SuccessResponse.data = team;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const getTeamMemberById = async (req, res, next) => {
  try {
    const member = await TeamService.getTeamMemberByIdService(req.params.id);
    SuccessResponse.message = 'Team member fetched successfully';
    SuccessResponse.data = member;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const updateTeamMember = async (req, res, next) => {
  try {
    const member = await TeamService.updateTeamMemberService(req.params.id, req.body);
    SuccessResponse.message = 'Team member updated successfully';
    SuccessResponse.data = member;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};

export const deleteTeamMember = async (req, res, next) => {
  try {
    const member = await TeamService.deleteTeamMemberService(req.params.id);
    SuccessResponse.message = 'Team member deleted successfully';
    SuccessResponse.data = member;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    next(error);
  }
};