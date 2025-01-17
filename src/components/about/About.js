import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
           
            <p style={{ color: info.baseColor }}>Web Development</p>
        <ul className={Style.skills}>
    {info.skills.webDevelopment.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>Design Systems</p>
<ul className={Style.skills}>
    {info.skills.designSystems.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>Database Management</p>
<ul className={Style.skills}>
    {info.skills.databaseManagement.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>LLM Apps Frameworks</p>
<ul className={Style.skills}>
    {info.skills.llmAppsFrameworks.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>Vector Databases</p>
<ul className={Style.skills}>
    {info.skills.vectorDatabases.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>API & Integration</p>
<ul className={Style.skills}>
    {info.skills.apiAndIntegration.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>CMS & E-Commerce</p>
<ul className={Style.skills}>
    {info.skills.cmsAndECommerce.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>Version Control</p>
<ul className={Style.skills}>
    {info.skills.versionControl.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>

<p style={{ color: info.baseColor }}>AI Tools</p>
<ul className={Style.skills}>
    {info.skills.aiTools.map((skill, index) => <li key={index}>{skill}</li>)}
</ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}