import React from 'react';
import { AiOutlineContainer, AiOutlineFileDone, AiOutlineAudit, AiOutlineFileSearch, AiOutlineSafetyCertificate } from "react-icons/ai";


export const SidebarData = [
    {
        id: Math.random(),
        title: "Tasks",
        icon: <AiOutlineContainer />,
        link: "https://reactjs.org/docs/lists-and-keys.html"
    },

    {
        id: Math.random(),
        title: "Task Page",
        icon: <AiOutlineFileDone />,
        link: "https://reactjs.org/tutorial/tutorial.html"
    },

    {
        id: Math.random(),
        title: "Profile",
        icon: <AiOutlineAudit />,
        link: "https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html"
    },

    {
        id: Math.random(),
        title: "Task Edit",
        icon: <AiOutlineFileSearch />,
        link: "https://reactjs.org/community/support."
    },

    {
        id: Math.random(),
        title: "Completed",
        icon: <AiOutlineSafetyCertificate />,
        link: "https://github.com/HovoKhachibabyan/TodoApp/tree/header"
    },
]
