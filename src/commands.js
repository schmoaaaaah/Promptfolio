import React from "react";
import styles from "./styles/commands.module.css";
import { links, info } from "./config";

const ListElement = (props) => {
  const { icon, name, link, description, alt } = props;
  return (
    <div className={styles.listElement}>
      <i className={icon}></i>{" "}
      <strong className={alt ? styles.alt : ""}>
        {link ? (
          <a href={link} target={"_blank"} rel="noreferrer">
            {name}
          </a>
        ) : (
          <>{name}</>
        )}
      </strong>{" "}
      <em>{description}</em>
    </div>
  );
};

const rawCommands = [
  {
    name: "help",
    icon: "fas fa-fw fa-question-circle",
    description: "List down all available commands",
    execute(app) {
      const { commands } = app.state;
      console.log(commands.values());
      return (
        <>
          Available commands:
          {[...commands.values()].map(({ icon, name, description }, key) => (
            <ListElement
              key={key}
              icon={icon}
              name={name}
              description={description}
              alt
            />
          ))}
        </>
      );
    },
  },
  {
    name: "info",
    icon: "fas fa-fw fa-info-circle",
    description: "Show information about me",
    execute(app) {
      const { userDataLoaded, userData } = app.state;
      if (!userDataLoaded)
        return <>promptfolio: user data could not be fetched</>;
      const { avatar_url, login, name, bio } = userData;
      return (
        <div className={styles.wrapper}>
          <img src={avatar_url} alt="GitHub avatar" />
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.headerInner}>
                <strong>{name}</strong> <span className="muted">@{login}</span>
              </span>
              <span className={styles.icons}>
                <i className="fab fa-fw fa-react"></i>
                <i className="fab fa-fw fa-js-square"></i>
                <i className="fab fa-fw fa-node-js"></i>
                <i className="fab fa-fw fa-python"></i>
                <i className="fab fa-fw fa-java"></i>
              </span>
            </div>
            <em>"...{bio}"</em>
            <div className={styles.info}>{info}</div>
          </div>
        </div>
      );
    },
  },
  {
    name: "projects",
    icon: "fas fa-fw fa-tools",
    description: "Display a list of my major projects",
    execute(app) {
      const { projectDataLoaded, projectData } = app.state;
      if (!projectDataLoaded)
        return <>promptfolio: project data could not be fetched</>;
      return (
        <>
          {projectData.map(({ name, html_url, description }, key) => (
            <ListElement
              key={key}
              icon={"fab fa-fw fa-github-alt"}
              name={name}
              link={html_url}
              description={description}
            />
          ))}
        </>
      );
    },
  },
  {
    name: "links",
    icon: "fas fa-fw fa-link",
    description: "Get all my important links and socials",
    execute() {
      return (
        <>
          {links.map(({ icon, name, link, description }, key) => (
            <ListElement
              key={key}
              icon={icon}
              name={name}
              link={link}
              description={description}
            />
          ))}
        </>
      );
    },
  },
  {
    name: "clear",
    icon: "fas fa-fw fa-eraser",
    description: "Clear terminal screen",
    execute(app) {
      app.setState({
        ...app.state,
        record: [],
      });
    },
  },
];
const commands = new Map(rawCommands.map((cmd) => [cmd.name, cmd]));
export default commands;
