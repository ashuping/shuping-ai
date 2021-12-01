import React from 'react';

import './PublicationEntry.css';

/* eslint-disable react/jsx-no-target-blank */

function util_trunc(st, len){
    if(st.length < len || len === 0) return st;

    return st.slice(0, len);
}

function AuthorBox({
    name,
    truncate
}){

    const trunc_name = util_trunc(name, truncate);

    return <div className={"pub-author" + ((name.length < truncate) ? " truncated" : "")}>
        {trunc_name}
    </div>
}

function PublicationEntry({
    isOpen,
    setOpen,
    title,
    authors,
    abstract,
    pubDate,
    publishedIn,
    paperUrl,
    doi
}){

    const author_boxes = authors.map(author => <AuthorBox name={author} truncate={0} />);

    return <div 
            className={"publication" + (isOpen ? " pub-open" : "pub-closed")}
            onClick={() => {setOpen(!isOpen)}}
        >
        <div className="pub-title">{title}</div>
        <div className="pub-date">{Intl.DateTimeFormat(navigator.language, {month: "long", year: "numeric"}).format(pubDate)}</div>
        <div className="conference">Published in {publishedIn}</div>
        <div className="author-list">{author_boxes}</div>
        <div className="abstract">{abstract}</div>
        <a
            className="full-text-link"
            href={paperUrl}
            target="_blank"
            rel="noopener"
        >
            Full Text
        </a>
        <a 
            className="doi-link"
            href={"https://doi.org/" + doi}
            target="_blank"
            rel="noopener"
        >{doi}</a>
    </div>
}

export default PublicationEntry;