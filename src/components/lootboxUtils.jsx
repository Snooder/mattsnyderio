import React, { useState, useEffect } from 'react';
import {
    FaPython,
    FaAws,
    FaDocker,
    FaGit,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaLinux,
    FaDrupal,
    FaJava,
    FaNodeJs,
    FaReact,
    FaGitlab,
    FaSlack,
    FaUnity,
  } from 'react-icons/fa';
  import { SiJenkins, SiPytorch, SiTerraform } from 'react-icons/si';
  import { SiMysql } from "react-icons/si";
  import { FaDatabase } from "react-icons/fa";
  import { FaShopify } from "react-icons/fa";
  import { FaBootstrap } from "react-icons/fa";
  import { FaGift } from "react-icons/fa";

  const IconComponents = {
    FaPython,
    FaAws,
    FaDocker,
    FaGit,
    FaGithub,
    FaHtml5,
    FaLinux,
    FaDrupal,
    FaJava,
    SiJenkins,
    SiPytorch,
    SiTerraform,
    SiMysql,
    FaShopify,
    FaBootstrap,
  };

// Function to generate a random color
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Technology list
export const technologies = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Jenkins', icon: <SiJenkins /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Shopify', icon: <FaShopify /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Slack', icon: <FaSlack /> },
    { name: 'Unity', icon: <FaUnity /> },
];

// Function to handle elapsed time logic
export const calculateRemainingTime = (startTime, flashDuration) => {
    return flashDuration - (Date.now() - startTime);
};
