const dev = {
    API_URL: "https://dev.teledirectasia.com:3092/",
};

const test = {
    API_URL: "https://dev.teledirectasia.com:3092/",
};

const prod = {
    API_URL: "https://dev.teledirectasia.com:3092/",
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    :
    process.env.REACT_APP_STAGE === 'test'
        ? test
        : dev

export const isBrowser = typeof window === "object";

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    APP_NAME: "task-manager",
    
    LOGIN: "login",
    DASHBOARD: "dashboard",
    TASKS: "tasks",
    
    ...config
};
