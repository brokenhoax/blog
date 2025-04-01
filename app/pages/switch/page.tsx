import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import ToggleImage from "../../components/toggleImage/ToggleImage";
import TableOfContents from "../../components/toc/TableOfContents";
import Callout from "../../components/callout/Callout";
import CodeBlock from "../../components/codeblock/CodeBlock";
import {
  faBullhorn,
  faTriangleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function Switch() {
  const htmlContent: string[] = [
    `
    # Enter “Manager” context

    enable
  `,
    `
    # Enter “Global Configuration” context
    
    config
  `,
    `
    # Enter VLAN “Context Configuration”
    
    vlan 10
  `,
    `
    # Move from any level back to the preceding level
    
    exit
  `,
    `
    # Access the "Switch Menu” page
    
    menu
  `,
    `
    # Access the "Switch Setup" page
    
    setup
  `,
    `
      # log in as manager
      u/n: manager
      p/w: <password>

      # log in as operator
      u/n: operator
      p/w: <password>

`,
  ];
  const images = [
    {
      id: "1",
      imagePath: "/images/kraus-cloud-switch-close.webp",
      imageAltText: "Figma slider handle",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "2",
      imagePath: "/images/kraus-cloud-windows-device-manager.webp",
      imageAltText: "Windows Device Manager > USB Serial Port (COM5)",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/kraus-cloud-putty.webp",
      imageAltText: "Putty Session Configuration",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/kraus-cloud-putty-session.webp",
      imageAltText: "Putty Session",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "4",
      imagePath: "/images/kraus-cloud-switch-view-menu.webp",
      imageAltText: "Switch CLI Main Menu Page",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "5",
      imagePath: "/images/kraus-cloud-switch-setup-page.webp",
      imageAltText: "Switch CLI Switch Setup Page",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
  ];
  const toc = (
    <ol className="orderedList">
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#choose-your-hardware">
          Choose Your Hardware
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#serial">
          Connect Via Console (Serial) Cable
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#change-context">
          Change Context
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#view-menu">
          View Menu
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#basic-setup">
          Basic Setup
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#create-vlans">
          Create VLANs
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#basic-make-trunk-interface">
          Make Trunk Interface
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#assign-vlans-to-interfaces">
          Assign VLANs to Interfaces
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#sntp">
          Simple Network Time Protocol (SNTP)
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#netgate">
          Connect Switch to Security Appliance (Netgate)
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#set-management-vlan">
          Set Management VLAN
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#ssh">
          Connect Via Ethernet Cable (SSH)
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#disable-ip-routing">
          Disable IP Routing
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#factory-reset">
          Factory Reset
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#backup-configuration">
          Backup Configuration
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#next-steps">
          Next Steps
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/switch#useful-commands">
          Useful Commands
        </Link>
      </li>
    </ol>
  );
  return (
    <>
      <NavBar></NavBar>
      <section className="section motion-preset-focus">
        {/* Title */}
        <h1 id="top" className="text-accent">
          Switch
        </h1>
        {/* Subtitle */}
        <div>
          <h2>Connect your network</h2>
          <p className="dateStamp text-accent">February 16th, 2025</p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Headline */}
        <div className="headlineWrapper">
          <Image
            src={images[0].imagePath}
            width={images[0].width}
            height={images[0].height}
            sizes={images[0].sizes}
            style={images[0].style}
            alt={images[0].imageAltText}
            priority={images[0].priority}
            quality={100}
            decoding="sync"
            loading="eager"
          ></Image>
          <p className="headline">
            Our Netgate security appliance comes with four wired ethernet
            interfaces, but one is already in use as our uplink and the other
            three aren't enough to meet our lab's needs. We're going to need
            more interfaces so we'll be connecting an 8-port (interface) gigabit
            ethernet switch to our lab in this post. In fact, we'll be doing a
            lot more than just connecting our switch to another device. We'll be
            dividing up eight (8) of the ten (10) interfaces into four (4)
            separate Virtual Local Area Networks (VLANs) and also applying
            multiple configurations to improve our lab's security posture while
            we're at it.
          </p>
          <p className="headline">
            This post covers a ton of critical Networking 101 fundamentals and
            also provides a lot hands-on experience. By the end, you'll have the
            network and security foundation for your lab in place and a decent
            amount of networking and network security experience as a cherry on
            top.
          </p>
        </div>
        {/* Post Image */}
        <div className="imageWrapper"></div>
        {/* Table of Contents */}
        <TableOfContents params={toc} length="17"></TableOfContents>
        {/* Choose Your Hardware */}
        <div>
          <h3 id="choose-your-hardware" className="text-accent">
            Choose Your Hardware
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Hands-on networking experience is priceless because, these days, an
            understanding of networking is encouraged if not outright required
            in the tech industry. The network touches everything and if you want
            to build more complex systems in the future then you'll need to know
            how to interconnect them.
          </p>
          <p>
            That said, the only piece of legacy hardware I'm using in this lab
            series is my HP 2915al switch. The HP 2915al is a little over 14
            years old at this point but, the concepts in this lab are still very
            relevant. Plus, our configuration requirements are minimal and
            pretty much any small switch (8-10 interfaces) will do for our lab
            so it won't be difficult to find a substitute.
          </p>
          <p>
            If you're looking for a recommendation, I've suggested the Cisco
            Catalyst 1200 series switch in the first post in the series titled
            “Gear Up”. Finally, keep in mind that while the below instructions
            and commands will not be compatible with a Cisco 1200 series switch,
            it will be a worthy challenge to similarly configure a different
            switch. Let's get networking!
          </p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Connect Via Console (Serial) Cable */}
        <div>
          <h3 id="serial" className="text-accent">
            Connect Via Console (Serial) Cable
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Assuming our switch is powered on and we have a console connection
            established between our PC and our HP 2915 switch, we'll want to
            launch PuTTY and establish a serial connection.
          </p>
          <p>
            With PuTTY open, under “Session”, select “Serial” for the
            “Connection type”, confirm your “Serial line” using Windows Device
            Manger, and click “Open”.
          </p>
          <p>
            If a blank Putty terminal window opens, that's a good thing! Just
            left-click the blank terminal, hit “enter” on your keyboard a few
            times to help kick in the Serial connection and you should see a
            prompt load.
          </p>
          <ToggleImage params={images["1"]}></ToggleImage>
          <ToggleImage params={images["2"]}></ToggleImage>
          <ToggleImage params={images["3"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Change Context */}
        <div>
          <h3 id="change-context" className="text-accent">
            Change Context
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            One of the first things to know about configuring a switch using the
            command line is that there are different “contexts” that you can
            enter to configure various aspects of the switch. For instance, when
            you first land in the command line after connecting to your switch,
            you'll notice that the prompt ends with a greater-than symbol
            `&gt;`. The mode or context you are in by default is called
            “Operator” mode and you can tell what context you're in by viewing
            the prompt.
          </p>
          <p>
            To have more privileges and do more things on your switch, you have
            to enter the “Manager” context by typing “enable”; however, to make
            configuration changes, you have to enter “Global Configuration”
            context by typing “config”. There are also non-global configuration
            “Context Configuration”(s) such as VLAN context configuration and
            interface context configuration. To exit a context type “exit”. To
            move from any level back to the “Manager” level, type “end”.
            Practice Tip: Try entering these contexts and typing “?” to see what
            commands are available to you as you change context.
          </p>
          <Callout
            icon={faBullhorn}
            text="Most of the switch's configuration will be handled using the built-in menu; however, I have provided useful commands below for your reference and for which you'll have to be in the approved context to execute."
          ></Callout>
          <CodeBlock props={htmlContent[0]} type="powershell"></CodeBlock>
          <CodeBlock props={htmlContent[1]} type="powershell"></CodeBlock>
          <CodeBlock props={htmlContent[2]} type="powershell"></CodeBlock>
          <CodeBlock props={htmlContent[3]} type="powershell"></CodeBlock>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* View Menu */}
        <div>
          <h3 id="view-menu" className="text-accent">
            View Menu
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Most of our switch configuration will be done using the command line
            menu. Type `menu` into the command line to enter the command line
            menu. You can arrow up and down to move from one menu item to
            another, hitting “enter” to access each item. Alternatively, you can
            simply type in the corresponding menu number to access each item
            with a single keystroke. Take a few minutes to browse and get a good
            idea of what options are available to you through the menu, Keep an
            eye out for navigation tips provided at the bottom of the screen.
          </p>
          <CodeBlock props={htmlContent[4]} type="powershell"></CodeBlock>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Basic Setup */}
        <div>
          <h3 id="basic-setup" className="text-accent">
            Basic Setup
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <h4>Manager Password Setup</h4>
          <p>
            Now that we've gained access to our switch and know our way around a
            bit, the first thing we should do is configure our “Switch Setup”.
            Using the `setup` command to enter the “Switch Setup” screen which
            is where you can configure the manager password amongst other
            critical settings. Of course, a best practice is to update the
            default passwords or set passwords in the event that there are none
            set by default. The HP 2915 has the concept of a “Manager” and
            “Operator” role, each with their own set of credentials and
            privileges. We'll first update the Manager Password and confirm it
            for good measure.
          </p>
          <Callout
            icon={faTriangleExclamation}
            text="Be careful to make sure you remember your password. If you forget it, you'll be locked out of your switch and will have to either do a factory reset or hold down the 'clear' button to wipe all passwords stored on the switch."
          ></Callout>
          <CodeBlock props={htmlContent[5]} type="powershell"></CodeBlock>
          <h4>Operator Password Setup</h4>
          <p>
            An optional step might be to set an “Operator” password which, as
            the name suggests, has fewer system privileges. To configure an
            operator password, we have to navigate to the CLI menu using the
            menu command. Then, we select "3. Console Passwords…" followed by
            "1. Set Operator Password."
          </p>
          <Callout
            icon={faCircleInfo}
            text="What the documentation doesn’t tell you is that the “Manager” and “Operator” usernames are simply “manager” and “operator”. Sort of a big miss, if you ask me…"
          ></Callout>
          <CodeBlock props={htmlContent[6]} type="powershell"></CodeBlock>
          <h4>IP Settings</h4>
          <p>
            There are other IP protocol related settings we'll need to configure
            in the Switch Setup. Most notably are the switch's
            <span className="text-accent bg-subtle path">IP Config</span>,
            <span className="text-accent bg-subtle path">IP Address</span>, and
            <span className="text-accent bg-subtle path">
              Default Gateway
            </span>{" "}
            which we'll be setting to
            <span className="text-accent bg-subtle path">DHCP</span>,
            <span className="text-accent bg-subtle path">192.168.50.10</span>,
            and
            <span className="text-accent bg-subtle path">192.168.2.1</span>{" "}
            respectively. In this step, we're telling the switch to get its IP
            address from a DHCP server we're explicitly setting the switch's
            default gateway and we're choosing a time synchronization method.
          </p>
          <ToggleImage params={images["4"]}></ToggleImage>
          {/* <ToggleImage params={images["5"]}></ToggleImage> */}
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* TBD */}
        <div>
          <h3 id="choose-your-hardware" className="text-accent">
            TBD
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>tbd</p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Switch;
