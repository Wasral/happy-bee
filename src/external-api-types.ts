export { IUserJSON } from './models/user.model';
export { ICollaboratorExtendedJSON, IProjectJSON, IProjectSimpleJSON } from './models/project.model';
export { IOrganizationJSON, IOrganizationSimpleJSON, IOrganizationUserSimpleJSON } from './models/organization.model';
export { ITeamJSON } from './models/organization/organization.team.submodel';
export { IMembershipInviteJSON } from './models/organization/organization.membership-invite.submodel';

import { IProjectJSON, IProjectSimpleJSON } from './models/project.model';
export type IProjectFullOrSimpleJSON = IProjectJSON | IProjectSimpleJSON;
