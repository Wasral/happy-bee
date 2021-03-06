const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('./guards/user');
const projectRoutes = require('./routes/project.routes');
const { Collaborators } = require('./routes/project');

router.get('/generate', projectRoutes.generateProjectId);
router.post('/deploy', isLoggedIn, projectRoutes.quickDeploy);
router.post('/create', isLoggedIn, projectRoutes.create); // new deploy method for V2 wizard and organization wizard
router.post('/analyze-repo', isLoggedIn, projectRoutes.analyzeRepo);
router.post('/:id/deploy-preview', isLoggedIn, projectRoutes.deployPreview);
router.post('/deploy-preview', isLoggedIn, projectRoutes.createProjectAndDeployPreview);
router.post('/:id/deploy-webflow', isLoggedIn, projectRoutes.deployWebflow);
router.post('/:id/rename', isLoggedIn, projectRoutes.renameProject);
router.get('/check-name', isLoggedIn, projectRoutes.checkName);
router.get('/my', isLoggedIn, projectRoutes.getMyProjects);
router.get('/my-dashboard', isLoggedIn, projectRoutes.getMyDashboardProjects);
router.get('/:id', isLoggedIn, projectRoutes.getProject);
router.put('/:id', isLoggedIn, projectRoutes.updateProject);
router.post('/import-netlify-site', isLoggedIn, projectRoutes.importNetlifySite);
router.post('/:id/duplicate', isLoggedIn, projectRoutes.duplicateProject);
router.post('/:id/redeploy', projectRoutes.redeployProject);
router.delete('/:id', isLoggedIn, projectRoutes.deleteProject);
router.get('/:id/preview', projectRoutes.getProjectPreview);
router.post('/:id/webhook/build/:event', projectRoutes.buildWebhook);
router.post('/:id/webhook/github', projectRoutes.githubWebhook);
router.post('/:id/webhook/netlify', projectRoutes.netlifyWebhook);
router.post('/:id/webhook/google', projectRoutes.googleWebhook);
router.post('/:id/webhook/refresh-content', projectRoutes.refreshContent);
router.post('/:id/webhook/container/:environment?', projectRoutes.containerWebhook);
router.post('/:id/webhook/:type/:environment?', projectRoutes.projectWebhook);
router.post('/:id/content-version', projectRoutes.contentVersion);
router.post('/:id/accept-collaboration-invite', isLoggedIn, Collaborators.acceptInvite);
router.get('/:id/collaborator/token', Collaborators.checkCollaboratorToken);
router.get('/:id/collaborator', isLoggedIn, Collaborators.getCollaborators);
router.post('/:id/invite-collaborator', isLoggedIn, Collaborators.inviteCollaborator);
router.delete('/:id/collaborator', isLoggedIn, Collaborators.removeCollaborator);
router.delete('/:id/collaborator/:collaboratorId', isLoggedIn, Collaborators.removeCollaborator);
router.patch('/:id/collaborator/:collaboratorId', isLoggedIn, Collaborators.updateCollaborator);
router.get('/:id/has-cms-access', isLoggedIn, projectRoutes.hasCmsAccess);
router.get('/:id/has-deployment-access', isLoggedIn, projectRoutes.hasDeploymentAccess);
router.get('/:id/can-start', projectRoutes.canStartContainer);
router.post('/:id/build', isLoggedIn, projectRoutes.buildProject);
router.post('/:id/publish-content', isLoggedIn, projectRoutes.publishContent);
router.post('/:id/has-changes', isLoggedIn, projectRoutes.hasChanges);
router.get('/:id/staged-changes', isLoggedIn, projectRoutes.getStagedChanges);
router.post('/:id/action', isLoggedIn, projectRoutes.makeAction);
router.get('/:id/send-trial-email', isLoggedIn, projectRoutes.sendTrialEmail);
router.post('/:id/split-test/:action', isLoggedIn, projectRoutes.splitTestAction);
router.post('/:id/scheduled-publish', isLoggedIn, projectRoutes.schedulePublish);
router.delete('/:id/scheduled-publish', isLoggedIn, projectRoutes.removeScheduledPublish);
router.post('/:id/publish-content-with-token', projectRoutes.publishContentWithToken);
router.post('/:id/request-publish', projectRoutes.requestPublish);
router.post('/:id/logs', isLoggedIn, projectRoutes.projectLogs);
router.get('/:id/health', projectRoutes.projectHealth);
router.get('/:id/has-changes-on-environments', isLoggedIn, projectRoutes.hasChangesOnEnvironments);
router.get('/:id/config/:environment?', projectRoutes.getProjectConfig);
router.put('/:id/schema-editor/:environment?/config', isLoggedIn, projectRoutes.updateStackbitSchema);
router.post('/:id/schema-editor/:environment?/config/generate', isLoggedIn, projectRoutes.generateStackbitSchema);
router.post('/:id/submission-created', projectRoutes.handleFormSubmission);

router.post('/webhook/stripe', projectRoutes.handleStripeWebhook);
router.get('/:id/subscription', isLoggedIn, projectRoutes.getSubscription);
router.post('/:id/subscription', projectRoutes.createSubscription);
router.put('/:id/subscription', isLoggedIn, projectRoutes.editSubscription);
router.post('/:id/trial', projectRoutes.startTrial);
router.put('/:id/unset-subscription-flag', projectRoutes.unsetSubscriptionFlag);
router.get('/:id/project-config', isLoggedIn, projectRoutes.getConfig);
router.patch('/:id/project-config', isLoggedIn, projectRoutes.updateConfig);
router.post('/:id/verify-custom-domain', isLoggedIn, projectRoutes.verifyCustomDomain);

router.put('/:id/projectgroup/:projectGroupId', isLoggedIn, projectRoutes.addProjectToProjectGroup);
router.delete('/:id/projectgroup/:projectGroupId', isLoggedIn, projectRoutes.removeProjectFromProjectGroup);

module.exports = router;
