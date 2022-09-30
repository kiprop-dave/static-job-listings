import React, { createContext, useState } from 'react';
import localJson from '../utils/data.json'

const Context = createContext();

function ContextProvider({ children }) {
    const [allJobs, setAllJobs] = useState(localJson);
    const allJobsCopy = localJson;

    function filterAllJobs(tag) {
        const _jobs = [...allJobs];
        const filtered = _jobs.filter(job => {
            return (
                job.role === tag || job.level === tag || job.languages.some(lang => lang === tag) ||
                job.tools.some(tool => tool === tag)
            )
        })
        setAllJobs(filtered);
    }

    function clearFilters() {
        setAllJobs(allJobsCopy);
    }


    function removeFilter(filterArr) {
        let _jobs = [...allJobsCopy];
        if (filterArr.length > 0) {
            for (let i = 0; i < filterArr.length; i++) {
                const filtered = _jobs.filter(job => {
                    return (
                        job.role === filterArr[i] || job.level === filterArr[i] || job.languages.some(lang => lang === filterArr[i]) ||
                        job.tools.some(tool => tool === filterArr[i])
                    )
                })
                _jobs = filtered;
            }
        }
        setAllJobs(_jobs);
    }

    const values = {
        allJobs, filterAllJobs, clearFilters, removeFilter
    };

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };