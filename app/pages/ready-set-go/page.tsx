import React from "react";
import Link from "next/link";
import CodeBlock from "../../components/codeblock/CodeBlock";
import TableOfContents from "../../components/toc/TableOfContents";

function ReadySetGo() {
  const htmlContent: string[] = [
    `
  # Create and access a directory for your app
  
  mkdir my_app
  
  cd my_app

  # Clone your repository
  
  git clone <your-git-repository>
  `,
    `
  # Stage all of your changes
  
  git add --all
  
  # Commit all of your changes and add a message"
  
  git commit -m "my_app - initial commit"
  
  # Push your code!
  
  git push
  `,
    `
  # Create your product build
  
  npm run build
  `,
    `
  # Deploy your build to gh-pages
  
  npm run deploy

  😎
  `,
  ];

  const toc = (
    <ol className="orderedList">
      <li key="1" className="hover:text-accent">
        <Link href="/pages/ready-set-go#register">Create a GitHub Account</Link>
      </li>
      <li key="2" className="hover:text-accent">
        <Link className="listItem" href="/pages/ready-set-go#create">
          Create a GitHub Repository
        </Link>
      </li>
      <li key="3" className="hover:text-accent">
        <Link className="listItem" href="/pages/ready-set-go#clone">
          Clone Your GitHub Repository
        </Link>
      </li>
      <li key="4" className="hover:text-accent">
        <Link className="listItem" href="/pages/ready-set-go#push">
          Push Your Code to GitHub
        </Link>
      </li>
      <li key="5" className="hover:text-accent">
        <Link className="listItem" href="/pages/ready-set-go#build">
          Create a Production Build
        </Link>
      </li>
      <li key="6" className="hover:text-accent">
        {" "}
        <Link className="listItem" href="/pages/ready-set-go#publish">
          Publish Your App to GitHub Pages
        </Link>
      </li>
      <li key="7" className="hover:text-accent">
        {" "}
        <Link className="listItem" href="/pages/ready-set-go#deploy">
          Deploy Your Build to GitHub Pages
        </Link>
      </li>
    </ol>
  );

  return (
    <section className="section motion-preset-focus">
      {/* Title */}
      <h1 id="top" className="text-accent">
        Ready Set Go
      </h1>
      <h2 id="top">Publish your app with GitHub Pages</h2>
      <p className="dateStamp text-accent">June 8th, 2022</p>
      {/* Divider */}
      <div className="divider border-b border-accent"></div>
      {/* Headline */}
      <div className="headlineWrapper">
        <p className="headline">
          So, you've dabbled with
          <span className="text-accent">
            {" "}
            <a
              href="https://create-react-app.dev/docs/getting-started"
              className="text-accent"
              target="_blank"
            >
              create-react-app
            </a>{" "}
          </span>
          and you're ready to build and share something amazing with the world.
          Now what? This post will walk you through creating a GitHub repository
          to manage and back up your application as well as using GitHub Pages
          to publish your app to the web.
        </p>
      </div>
      {/* Table of Contents */}
      <TableOfContents params={toc} length=""></TableOfContents>
      {/* Create a GitHub Account */}
      <div>
        <h3 id="register" className="text-accent">
          Create a GitHub Account
          <span>
            <Link scroll={true} href="/pages/ready-set-go#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </span>
        </h3>
        <p>
          You need a place to store your code and GitHub is pretty much the
          defacto code repository on the web. You'll use the git version control
          system to manage your code repositories—repositories which you'll
          store in GitHub. Let's sign up at{""}
          <span>
            {" "}
            <a href="https://github.com/signup" className="text-accent">
              GitHub Signup
            </a>{" "}
          </span>
          and follow the steps to set up an account.
        </p>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
      {/* Create a GitHub Repository */}
      <div>
        <div>
          <h3 id="create" className="text-accent">
            Create a GitHub Repository
            <Link scroll={true} href="/pages/ready-set-go#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </h3>
        </div>
        <p>
          Let's create our first GitHub repository! There should be a green
          button on your GitHub homepage labeled "New". Click it to create a new
          repository or
          <span>
            {" "}
            <a href="https://github.com/new" className="text-accent">
              click here
            </a>{" "}
          </span>
          to save a few keyboard strokes. Give your repository a name and set it
          to "public". No need to bother with any of the other settings for now.
        </p>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
      {/* Clone Your GitHub Repository */}
      <div>
        <div>
          <h3 id="clone" className="text-accent">
            Clone Your GitHub Repository
            <Link scroll={true} href="/pages/ready-set-go#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </h3>
        </div>
        <p>
          You'll want to save your app to your computer and sync it to GitHub.
          So, we'll create a folder for our app and we'll clone our GitHub
          repository to the same folder.
        </p>
        <p>
          To clone your repository, go to your repository on GitHub and, on the
          "Code" page there's a green "Code" button. Clicking it will present a
          dropdown menu with a "copy to clipboard" button for your repository's
          GitHub URL. We'll use this URL, along with the "git clone" command, to
          clone our repository locally so we can develop our changes locally
          using all of the wonderful capabilities provided by a version control
          system known as git. To learn more about git, check out their{" "}
          <span>
            <a href="https://git-scm.com/" className="text-accent">
              documentation.
            </a>
          </span>{" "}
        </p>
        {/* Code Snippet */}
        <CodeBlock props={htmlContent[0]} type="bash"></CodeBlock>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
      {/* Push Your Code to GitHub */}
      <div>
        <div>
          <h3 id="push" className="text-accent">
            Push Your Code to GitHub
            <Link scroll={true} href="/pages/ready-set-go#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </h3>
        </div>
        <p>
          Refer to the{" "}
          <a
            href="https://create-react-app.dev/docs/getting-started"
            className="text-accent"
          >
            Create React App
          </a>{" "}
          tutorial for creating your new React app. Make sure you're still in
          your "my_app" directory when creating your new React application. Once
          you're ready to save your changes, save them locally and then push
          your code to GitHub. See below for example code you can use to stage,
          commit, and push your changes to GitHub.
        </p>
        {/* Code Snippet */}
        <CodeBlock props={htmlContent[1]} type="bash"></CodeBlock>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
      {/* Create a Production Build */}
      <div>
        <div>
          <h3 id="build" className="text-accent">
            Create a Production Build
            <Link scroll={true} href="/pages/ready-set-go#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </h3>
        </div>
        <p>
          The production build is an web optimized version of our app. This is
          the version we'll post to GitHub Pages. Production builds improve load
          time which makes for happier users. So run that build and get ready to
          deploy your app.
        </p>
        {/* Code Snippet */}
        <CodeBlock props={htmlContent[2]} type="bash"></CodeBlock>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
      {/* Publish Your App to GitHub Pages */}
      <div>
        <div>
          <h3 id="publish" className="text-accent">
            Publish Your App to GitHub Pages
            <Link scroll={true} href="/pages/ready-set-go#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </h3>
        </div>
        <p>
          For a more in-depth understanding of GitHub Pages,{" "}
          <span>
            <a
              href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"
              className="px-1 link"
            >
              please read the documentation,
            </a>
          </span>{" "}
          but if you're looking for the TL;DR, then you should know that
          deploying your application from a GitHub repository to GitHub Pages
          is, as you should expect, very easy. Simply go to "Settings" and
          "Pages" page, select "Deploy from a branch" as your "Source" and pick
          a branch from the "Branch" dropdown which will be used to build your
          application.
        </p>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
      {/* Deploy Your Build to GitHub Pages */}
      <div>
        <div>
          <h3 id="deploy" className="text-accent">
            Deploy Your Build to GitHub Pages
            <Link scroll={true} href="/pages/ready-set-go#top">
              <span className={`topScroller text-subtle`}>#</span>
            </Link>
          </h3>
        </div>
        <p>
          From here on out, to deploy your changes to GitHub Pages, just follow
          the previous steps (i.e., stage, commit, push, build) and if you'd
          like to publish updates to your GitHub Pages page from the comfort of
          your terminal, just install the NPM package called
          <span>
            {" "}
            <a
              href="https://www.npmjs.com/package/gh-pages#command-line-utility"
              className="text-accent"
            >
              gh-pages
            </a>{" "}
          </span>
          and set up a package.bash "deploy" script to push your code to your
          GitHub Pages page as is illustrated below. Godspeed!
        </p>
        {/* Code Snippet */}
        <CodeBlock props={htmlContent[3]} type="bash"></CodeBlock>
      </div>
    </section>
  );
}

export default ReadySetGo;
