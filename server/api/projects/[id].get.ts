import projects from './projects.get';

type Project = {
    id: string;
    name: string;
    image: string;
};

export default defineEventHandler(async (event) => {
    const projectId = event?.context?.params?.id;

    const projectsList = await projects(event);
    const project = projectsList.find(p => String(p.id) === projectId);
    if (!project) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Project not found',
        })
    }

    return project;
});