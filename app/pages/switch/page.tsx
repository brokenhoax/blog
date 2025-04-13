import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import ToggleImage from "../../components/toggleImage/ToggleImage";
import TableOfContents from "../../components/toc/TableOfContents";
import Callout from "../../components/callout/Callout";
import CodeBlock from "../../components/codeblock/CodeBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faTriangleExclamation,
  faCircleInfo,
  faThumbsUp,
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
    # Enter VLAN Configuration context
    
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
    const KRAUS_CLOUD_VLANS = {
      vlan_1: {
        name: "default"
        subnet: "192.168.50.0/24",
        netgate_virtual_interface_ip: "192.168.50.1".
        switch_physical_interface_ip: "192.168.50.254",
        switch_interfaces: "10"
      },
      vlan_10: {
        name: "services"
        subnet: "192.168.10.0/24",
        netgate_virtual_interface_ip: "192.168.10.1".
        switch_physical_interface_ip: "192.168.10.254",
        switch_interfaces: "1-3"
      },
        name: "users"
        vlan_20: {
        subnet: "192.168.20.0/24",
        netgate_virtual_interface_ip: "192.168.20.1".
        switch_physical_interface_ip: "192.168.20.254",
        switch_interfaces: "4-6"
      },
        name: "storage"
        vlan_10: {
        subnet: "192.168.30.0/24",
        netgate_virtual_interface_ip: "192.168.30.1".
        switch_physical_interface_ip: "192.168.30.254",
        switch_interfaces: "7"
      },
        name: "management"
        vlan_10: {
        subnet: "192.168.40.0/24",
        netgate_interface_ip: "192.168.40.1".
        switch_physical_interface_ip: "192.168.40.254",
        switch_interfaces: "8"
      }
    }
  `,
    ` 
    # Enter any context
    enable

    # Show time and date
    display clock
    show time
  `,
    `
    time 11:30:00 11/17/2022
    time 1:50:00 3/22/2024
  `,
    `
    # View sntp settings
    show sntp

    # Sync time
    timesync sntp

    # View time
    show time
    display clock
  `,
    `
    # Show logs
    show logging -a
  `,
    `
    [no] management-vlan < vlan-id | vlan-name >
  `,
    `
    # Open SSH config
    vim ~/.ssh/config

    # Add the following
    Host *
        KexAlgorithms +diffie-hellman-group1-sha1,diffie-hellman-group14-sha1
  `,
    `
    # ssh manager@<management-vlan-interface-ip-address>
    ssh manager@192.168.40.254
  `,
    `
    erase startup-config
    `,
    `
    # log in as manager
    u/n: manager
    p/w: <password>

    # log in as operator
    u/n: operator
    p/w: <password>
  `,
    `
    ?
    `,
    `
    hostname <new-name>
    `,
    `
    show history
    `,
    `
    [no] ip route 0.0.0.0/0 192.168.2.1
    `,
    `
    interface 1-10 disable
    `,
    `
    interface 1-4 enable
    `,
    `
    interface 1,2 enable
    `,
    `
    show interface brief
    `,
    `
    vlan 1
    no ip address 192.168.50.10 255.255.255.0
    `,
    `
    no vlan <vlan_id>
    `,
    `
    show mac-address
    `,
    `
    show ip
    `,
    `
    show arp
    `,
    `
    show lldp info remote-device
    `,
    `
    show ip route
    `,
    `
    write memory
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
    {
      id: "6",
      imagePath: "/images/kraus-cloud-switch-vlan-names.webp",
      imageAltText: "Switch CLI VLAN Names Page",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "7",
      imagePath: "/images/kraus-cloud-switch-port-trunk-settings.webp",
      imageAltText: "Switch CLI Port Trunk Settings",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "8",
      imagePath: "/images/kraus-cloud-switch-vlan-port-assignment.webp",
      imageAltText: "Switch CLI VLAN Port Assignment",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "9",
      imagePath: "/images/pfsense_interfaces_VLAN_DEFAULT.webp",
      imageAltText: "pfSense interface for VLAN_DEFAULT",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "9",
      imagePath: "/images/kraus-cloud-switch-internet-protocol-service.webp",
      imageAltText: "Switch CLI Internet (IP) Service",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "10",
      imagePath: "/images/kraus-cloud-switch-setup-page-sntp.webp",
      imageAltText: "Switch CLI Switch Setup Page w/ SNTP Updates",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "11",
      imagePath: "/images/pfsense_rules_VLAN_DEFAULT_NTP.webp",
      imageAltText: "pfSense Firewall NTP Rules for Default VLAN",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "12",
      imagePath: "/images/pfSense_interfaces_DHCP_Server_(VLAN_DEFAULT).webp",
      imageAltText: "pfSense Interface VLAN Default DHCP Settings",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "12",
      imagePath: "/images/kraus-cloud-switch-show-logs-command.webp",
      imageAltText: "Switch CLI Show Logs Command — SNTP Logs",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "13",
      imagePath: "/images/kraus-cloud-switch-fw-close.webp",
      imageAltText: "Kraus Cloud Lab — Switch & Security Appliance Connection",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "13",
      imagePath: "/images/kraus-cloud-switch-startup-configuration.webp",
      imageAltText: "Kraus Cloud Lab — Startup Configuration",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "14",
      imagePath: "/images/kraus-cloud-switch-web-ui-backup.webp",
      imageAltText:
        "Kraus Cloud Lab — Switch Web UI — Download Configuration File",
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
        <Link scroll={true} href="/pages/switch#make-trunk-interface">
          Make Uplink "Trunk" Interface
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
        <Link scroll={true} href="/pages/switch#connect-uplink">
          Connect Switch to (Netgate) Security Appliance
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

  // For Each Codeblock, replace strings
  // Loop htmlContent on component load
  function encodeHTML(str: string) {
    return str.replace(/[&<>"']/g, function (tag) {
      return (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[tag] || tag
      );
    });
  }
  let code = '<tag attribute="value">...</tag>';
  let encodedCode = encodeHTML(code);

  return (
    <div className="gridContainer">
      <div className="leftSidebar"></div>
      <section className="section motion-preset-focus">
        {/* Title */}
        <h1 id="top" className="text-accent">
          Switch
        </h1>
        {/* Subtitle */}
        <div>
          <h2>Connect your network</h2>
          <p className="dateStamp text-accent">April 5th, 2025</p>
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
            top.&nbsp;
            <span>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className={`text-white`}
                fixedWidth
              ></FontAwesomeIcon>
            </span>
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
            Hands-on networking experience is still extremely valuable in 2025.
            A solid understanding of networking is encouraged if not outright
            required in many disciplines within the tech industry. The network
            touches everything and if you need to work with, build and/or
            maintain systems in the future then you'll need to know how they
            communicate.
          </p>
          <p>
            As for the hardware, the only piece of legacy hardware I'm using in
            this lab series is my HP 2915al switch. The HP 2915al is a little
            over 14 years old at this point, but the concepts in this lab are
            still very relevant and applicable to any modern switch you choose
            for your lab.
          </p>
          <p>
            Our configuration requirements are minimal and pretty much any small
            switch (8-10 interfaces) will do for our lab so it won't be
            difficult to find a substitute to the HP 2915al. If you're looking
            for a recommendation, I've suggested the{" "}
            <a href="">Cisco Catalyst 1200 series switch</a> in the first post
            in the series titled “Gear Up”. Finally, keep in mind that while the
            below instructions and commands will not be compatible with a Cisco
            1200 series switch, it will be a worthy challenge to similarly
            configure a different switch and, at the end of the day, wha's
            important is learning the concepts. Let's get networking!
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
            you'll notice that the prompt ends with a greater-than symbol &nbsp;
            <span className="text-accent bg-subtle path">&gt;</span>. The mode
            or context you are in by default is called “Operator” mode and you
            can tell what context you're in by viewing the prompt.
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
            menu. Type <span className="text-accent bg-subtle path">menu</span>{" "}
            into the command line to enter the command line menu. You can arrow
            up and down to move from one menu item to another, hitting “enter”
            to access each item. Alternatively, you can simply type in the
            corresponding menu number to access each item with a single
            keystroke. Take a few minutes to browse and get a good idea of what
            options are available to you through the menu and be sure to keep an
            eye out for navigation tips provided at the bottom of the screen.
          </p>
          <CodeBlock props={htmlContent[4]} type="powershell"></CodeBlock>
          <ToggleImage params={images["4"]}></ToggleImage>
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
          <h4 className="-mt-4">Manager Password Setup</h4>
          <p>
            Now that we've gained access to our switch and know our way around a
            bit, the first thing we should do is configure our “Switch Setup”.
            Using the &nbsp;
            <span className="text-accent bg-subtle path">setup</span>&nbsp;
            command to enter the “Switch Setup” screen which is where you can
            configure the manager password amongst other critical settings. Of
            course, a best practice is to update the default passwords or set
            passwords in the event that there are none set by default. The HP
            2915 has the concept of a “Manager” and “Operator” role, each with
            their own set of credentials and privileges. We'll first update the
            Manager Password and confirm it for good measure.
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
            text="What the documentation doesn't tell you is that the “Manager” and “Operator” usernames are simply “manager” and “operator”. Sort of a big miss, if you ask me…"
          ></Callout>
          <CodeBlock props={htmlContent[15]} type="powershell"></CodeBlock>
          <h4>IP Settings</h4>
          <p>
            There are other IP protocol related settings we'll need to configure
            in the Switch Setup. Most notably are the switch's &nbsp;
            <span className="text-accent bg-subtle path">IP Config</span>,
            &nbsp;<span className="text-accent bg-subtle path">IP Address</span>
            , and &nbsp;
            <span className="text-accent bg-subtle path">Default Gateway</span>
            &nbsp; which we'll be setting to &nbsp;
            <span className="text-accent bg-subtle path">DHCP</span>, &nbsp;
            <span className="text-accent bg-subtle path">192.168.50.10</span>,
            and &nbsp;
            <span className="text-accent bg-subtle path">192.168.2.1</span>
            &nbsp; respectively. In this step, we're telling the switch to get
            its IP address from a DHCP server we're explicitly setting the
            switch's default gateway and we're choosing a time synchronization
            method.
          </p>
          <ToggleImage params={images["5"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Create VLANs */}
        <div>
          <h3 id="create-vlans" className="text-accent">
            Create VLANs
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            With our basic switch setup in place, we're ready to start
            configuring our switch's ethernet interfaces. We'll start by
            creating VLANs which are used to (virtually) divide our network up
            into multiple virtual networks. VLANs are useful for both
            performance and security reasons.
          </p>
          <p>
            Performance gains from implementing VLANs are due to the fact that
            traffic such as broadcasts are isolated to their own VLAN and if
            VLANs are assigned to individual ports, then broadcasts destined for
            users/devices that are part of one VLAN won't need to be broadcast
            to users/devices that are part of a different VLAN. In short, you
            have less congestion on the network when you use VLANs.``
          </p>
          <p>
            Security gains result from the fact that we can, for instance, keep
            our more valuable users or resources (e.g., our crown jewels) in one
            VLAN and our less valuable (and, perhaps, more risky) users or
            resources (e.g., our guest users) in a different VLAN. Then, we can
            use VLANs as constructs within our security policies in order to
            apply more granular security controls on traffic flowing between
            VLANs. For instance, to exaggerate the point, we don't care about
            our Guest VLAN as much as we do, say, our Management VLAN. Perhaps,
            all we care to do is allow guests to jump on the Wi-Fi and get out
            to the Internet. The routing and firewall policies that we need to
            put in place for our Guest VLAN is pretty straight forward—they
            can't do anything else but reach the internet. Our Management VLAN,
            on the other hand, would have firewall and routing policies that
            allow an Administrator access to various network resources for
            management purposes as well as access to the internet. Obviously,
            the routing and firewall policies needed to support our
            Administrators/Management VLAN are greater in number and much more
            complex, due to the level of sophistication to support the use case.
          </p>
          <p>
            That said, in our lab we will create four (4) VLANs. One for our
            “Services” which will be our servers and applications that we want
            to serve up from our cloud. We'll have another VLAN for our “Users”
            which, as you can imagine, is a catch all for all users types. You
            could imagine that in your typical organization you'd have multiple
            VLANs for various types of users and those typically align to
            various departments across an organization. Feel free to add more
            VLANs for different user types if you want, but I'm keeping it to
            one user VLANs for simplicities sake. Our third VLAN will be for
            “Storage”. This VLAN is reserved for our lab's Network Attached
            Storage (NAS) appliance which we'll be adding in a subsequent lab
            post. Finally, our fourth VLAN will be our “Management” VLAN. This
            VLAN will be used to allow and only allow management access to the
            devices within our Cloud for management purposes. That said, let's
            create our VLANS referencing the code block shared below. To create
            VLANs on our switch, we'll enter the &nbsp;
            <span className="text-accent bg-subtle path">menu</span>&nbsp;
            command and navigate to:
          </p>
          <div className="text-white bg-subtle path">
            &nbsp;Menu&nbsp;<span className="text-accent">{">"}</span>&nbsp;LAN
            Menu&nbsp;
            <span className="text-accent">{">"}</span>&nbsp;VLAN Names&nbsp;
          </div>
          <ToggleImage params={images["6"]}></ToggleImage>
          <CodeBlock props={htmlContent[6]} type="json"></CodeBlock>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Make Uplink (Trunk) Interface */}
        <div>
          <h3 id="make-uplink-trunk-interface" className="text-accent">
            Make Uplink "Trunk" Interface
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Our “Trunk” interface is the interface from which we will send all
            of our switch's traffic to our Netgate security appliance. To
            configure a trunk interface on our switch, navigate to "Port/Trunk
            Settings" menu page and set the interface as type{" "}
            <span className="text-accent bg-subtle path">trunk</span>. In
            subsequent steps, we'll make a physical connection between our
            Netgate appliance and our network switch using this trunk interface
            9/10 and we'll also assign VLANs as “tagged” when transmitted over
            this interface. More on that in the next section.
          </p>
          <div className="text-white bg-subtle path">
            &nbsp;Menu&nbsp;<span className="text-accent">{">"}</span>
            &nbsp;Switch Configuration&nbsp;
            <span className="text-accent">{">"}</span>
            &nbsp;Port/Trunk Settings&nbsp;
          </div>
          <ToggleImage params={images["7"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Assign VLANs to Interfaces */}
        <div>
          <h3 id="assign-vlans-to-interfaces" className="text-accent">
            Assign VLANs to Interfaces
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            With our VLANs and trunk interface created, it's time to assign our
            VLANs to the physical interfaces on our switch and also ensure our
            VLANs are properly assigned to our trunk interface. The “VLAN Port
            Assignment” menu page makes configuration fairly straightforward;
            however, there are a handful of different VLAN interface assignment
            types to familiarize yourself with before you begin assigning VLANs
            to interfaces. See below for the abbreviated description of the
            three we'll be using in our lab:
          </p>
          <p>
            An "untagged" type interface assignment is used with access
            interfaces to allow a device to connect to the VLAN. Each VLAN
            marked “untagged” in the below screenshot is assigned to the
            corresponding interface.
          </p>
          <p>
            A "tagged" type interface assignment is used with trunk interfaces
            in order to send one or more VLAN's traffic to/from your switch.
            Traffic passed through these interfaces are tagged with their
            assigned VLAN IDs.
          </p>
          <p>
            A forbid type interface assignment is used to prevent the specified
            VLAN from being assigned to the corresponding interface. This keeps
            our interfaces nice and isolated to only their assigned VLAN as
            we're implementing a 1:1 VLAN-to-interface design.
          </p>
          <h3>Default VLAN</h3>
          <p>
            The Default VLAN has to be assigned to at least one interface and,
            so, we'll assign it to an unused interface (i.e., 10/10) by marking
            the Default VLAN as untagged.
          </p>
          <h3>Trunk Interface</h3>
          <p>
            Our trunk interface is interface 9/10 which we created in the
            previous step titled
            <Link
              scroll={true}
              href="/pages/switch#make-uplink-trunk-interface"
              className={`text-accent`}
            >
              &nbsp;"Make Uplink 'Trunk' Interface"
            </Link>
            . We'll tag all of our VLANs to our trunk interface except for our
            Management VLAN because, for added security, we want to prevent our
            switch's Management VLAN traffic from leaving the switch.
          </p>
          <ToggleImage params={images["8"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Simple Network Time Protocol (SNTP) */}
        <div>
          <h3 id="sntp" className="text-accent">
            Simple Network Time Protocol (SNTP)
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            When introducing a new system into your lab environment it's
            important to ensure that the system's clock is synchronized with all
            the other systems within your lab. In our last lab, you might recall
            configuring your Netgate appliance to be our Network Time Protocol
            (NTP) server. So, we have an NTP server. Let's use it to keep our
            switch's time in sync.
          </p>
          <p>
            To get our bearings, let's enter “Manger” context and display our
            systems clock and/or the current time using the following commands.
          </p>
          <h4>Display Time</h4>
          <CodeBlock props={htmlContent[7]} type="powershell"></CodeBlock>
          <p>
            We can set the time and date manually with the following commands,
            but we don't want to do this because a better option is to use
            Network Time Protocol (NTP).
          </p>
          <CodeBlock props={htmlContent[8]} type="bash"></CodeBlock>
          <h4>Configure SNTP Settings on Switch</h4>
          <p>
            In “Lab 2 — pfSense”, we configured our VLAN interfaces but, for
            good measure, let''s confirm that our “VLAN_DEFAULT” interface is
            enabled and set to:&nbsp;
            <span className={`text-accent bg-subtle path`}>192.168.50.1</span>
          </p>
          <ToggleImage params={images["9"]}></ToggleImage>
          <p>
            We haven't configured our VLANs within our switch yet, so the
            “Internet (IP) Service” screen with found in the “Switch
            Configuration” menu on your switch will look different than the
            screenshot I'm sharing here. For now, we're just going to focus on
            setting “IP Routing” to &nbsp;
            <span className="text-accent bg-subtle path">Disabled</span>,
            &nbsp;ensuring our “Default Gateway” is set to &nbsp;
            <span className="text-accent bg-subtle path">192.168.2.1</span>
            &nbsp;and, finally, ensuring that our DEFAULT_VLAN has an “IP
            Config” of&nbsp;
            <span className="text-accent bg-subtle path">DHCP/Bootp</span>
            &nbsp;and a &nbsp;
            <span className="text-accent bg-subtle path">192.168.50.10/24</span>
            &nbsp;IP address and subnet mask. Save your changes, if any were
            required, and exit.
          </p>
          <ToggleImage params={images["10"]}></ToggleImage>
          <p>
            Going back to the “Switch Setup” menu screen, we're need to check
            that our “IP Config” setting is set to&nbsp;
            <span className="text-accent bg-subtle path">DHCP/Bootp</span>.
            Also, “Time Sync Method” should be set to &nbsp;
            <span className="text-accent bg-subtle path">SNTP</span>. “SNTP
            Mode” should be set to&nbsp;
            <span className="text-accent bg-subtle path">Unicast</span> and you
            can leave the default polling interval of&nbsp;
            <span className="text-accent bg-subtle path">720</span>. Save your
            changes, if any were required, and exit.
          </p>
          <ToggleImage params={images["11"]}></ToggleImage>
          <h4>Create NTP Firewall Rules in pfSense</h4>
          <p>
            We now have our switch properly configured to support SNTP, but we
            still haven't allowed NTP traffic to pass to/from our switch to/from
            our Netgate appliance (which is acting as our NTP server). We'll
            need two new firewall rules to allow NTP traffic to pass—one from
            our switch (
            <span className="text-accent bg-subtle path">192.168.50.10</span>)
            to our 'Netgate appliance's Default VLAN Interface IP address (
            <span className="text-accent bg-subtle path">192.168.50.1</span>)
            over the Default VLAN since, according to our switches
            documentation, NTP traffic is passed over the Default VLAN of our
            switch. We'll create those rules within pfSense at:
          </p>
          <div className="text-white bg-subtle path">
            &nbsp;Menu&nbsp;<span className="text-accent">{">"}</span>
            &nbsp;Firewall&nbsp;
            <span className="text-accent">{">"}</span>&nbsp;Rules&nbsp;
            <span className="text-accent">{">"}</span>&nbsp;VLAN_DEFAULT&nbsp;
          </div>
          <ToggleImage params={images["12"]}></ToggleImage>
          <h4>Enable DHCP for Default VLAN in pfSense</h4>
          <p>
            We're going to treat our Default VLAN interface a little differently
            than all of the other interfaces in that we're going to enable DHCP
            support for this interface. This isn't a requirement, but it does
            allow us to explicitly define the NTP server issued via DHCP. First,
            let's ensure our “DHCP Backend” within pfSense is the newer &nbsp;
            <span className="text-accent bg-subtle path">KIA</span> &nbsp; DHCP
            setting. Second, ensure that the “Enable” checkbox is checked. We've
            already defined our Subnet for VLAN_DEFAULT as &nbsp;
            <span className="text-accent bg-subtle path">192.168.50.0/24</span>,
            but we're going to carve out nine addresses that we'll reserve for
            static assignment in a future lab by setting our “Address Pool
            Range” to
            <span className="text-accent bg-subtle path">192.168.50.10</span>
            &nbsp; to &nbsp;
            <span className="text-accent bg-subtle path">192.168.50.243</span>.
            Finally, towards the bottom of this menu is our “NTP Server 1”
            setting which we'll set to &nbsp;
            <span className="text-accent bg-subtle path">192.168.50.1</span>
            &nbsp; which is the IP address of our VLAN_DEFUALT interface.
          </p>
          <ToggleImage params={images["13"]}></ToggleImage>
          <h4>Synchronize Your Time Using NTP</h4>
          <p>
            Both your switch and your Netgate appliance should be in the proper
            configuration in order to support SNTP on your HP 2915. Run the
            following series of commands to view your SNTP settings, sync your
            switch's time with your NTP server's time, and confirm that the
            switches time has been properly updated. If your time isn't updating
            properly, try a reboot command <span>boot</span> and double-check
            your configurations.
          </p>
          <CodeBlock props={htmlContent[9]} type="bash"></CodeBlock>
          <h4>Confirm SNTP Settings In Logs</h4>
          <p>
            For good measure, you can also use your switch's logs to confirm
            that SNTP has updated your system time and date:
          </p>
          <CodeBlock props={htmlContent[10]} type="bash"></CodeBlock>
          <ToggleImage params={images["14"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Connect Switch to (Netgate) Security Appliance */}
        <div>
          <h3 id="connect-uplink" className="text-accent">
            Connect Switch to (Netgate) Security Appliance
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Next, we just need to make a physical connection between interface
            3/4 on our Netgate appliance and interface 9/10 on our switch. Your
            switch should now be properly connected to the network. This is good
            time to connect your PC to one of the User VLAN ports, making sure
            to update your PC's IP address and default gateway so that it's in
            the same subnet as the User VLAN.
          </p>
          <p>
            At this point, you should be able to get out to the internet and
            ping other users in the users VLAN. Review your pfSense firewall
            rules and test your policies to ensure they're implemented
            correctly. If everything is working as expected, congratulations!
          </p>
          <p>
            If everything's <span className="italic">not</span> working as
            expected, don't worry! Consider it a great learning opportunity and
            take your troubleshooting one step at a time. Be sure to review you
            switch and firewall configurations, check your logs and don't forget
            to check your physical connections as well. If you're still stuck,
            familiarize yourself with the following tools to help you
            troubleshoot:
          </p>
          <ol>
            <li>
              • &nbsp;<span className="text-accent bg-subtle path">ping</span>
            </li>
            <li>
              • &nbsp;
              <span className="text-accent bg-subtle path">nslookup</span>
            </li>
            <li>
              • &nbsp;
              <span className="text-accent bg-subtle path">ipconfig</span>
            </li>
            <li>
              • &nbsp;
              <span className="text-accent bg-subtle path">traceroute</span>
            </li>
          </ol>
          <ToggleImage params={images["15"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Set Management VLAN */}
        <div>
          <h3 id="set-management-vlan" className="text-accent">
            Set Management VLAN
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            For added security, you can configure your switch so that it can
            only be managed through a single VLAN and, if that VLAN is only tied
            to a single interface on the switch, then you can lock down
            management access to a single ethernet interface. The 2915 switch's
            documentation refers to this as the “Management VLAN” which explains
            why we named VLAN 40 just that—the “Management VLAN”. So, as you
            probably guessed, we'll be setting ethernet interface 8/10 as our
            Management interface and it will be the only switch interface that
            we can use to manage the switch. The more you can do to make it
            difficult for an attacker to compromise your network, the better, so
            let's get to it!
          </p>
          <p>
            You cannot set the Management VLAN using the menu; however, the
            command to set/unset the management VLAN is pretty straight forward.
            For the less familiar, you can use the below command to set
            <span className="text-accent bg-subtle path">
              management-vlan
            </span>{" "}
            or unset{" "}
            <span className="text-accent bg-subtle path">
              no management-vlan
            </span>{" "}
            the management VLAN and you can do so by specifying either the VLAN
            ID (e.g., 40) or VLAN Name (e.g.,{" "}
            <span className="text-accent bg-subtle path">Management_VLAN</span>)
          </p>
          <CodeBlock props={htmlContent[11]} type="bash"></CodeBlock>
          <p>
            You can issue the{" "}
            <span className="text-accent bg-subtle path">show config</span>{" "}
            command to confirm that your commands were saved:
          </p>
          <ToggleImage params={images["16"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Connect Via Ethernet Cable (SSH) */}
        <div>
          <h3 id="ssh" className="text-accent">
            Connect Via Ethernet Cable (SSH)
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Secure Shell (SSH) protocol is, as it's name implies, a secure way
            to gain shell access on our switch over the network. Since we've
            assigned our management VLAN, VLAN 40, we will need to make a
            physical connection from our Lab PC to interface 8/8 on our switch
            in order to make an SSH connection and we also need to make sure our
            Lab PC's IP address is within the VLAN 40 subnet of 192.168.40.1/24.
          </p>
          <Callout
            icon={faBullhorn}
            text="Considering this switch is ancient, it appears that my much newer operating system (Windows 10) requires a “newer key exchange method” (i.e., modern encryption algorithms) than what is supported by the HP 2915. Therefore, to establish a SSH session in my lab, I had to add support for those legacy encryption algorithms by issuing the following commands in Git Bash."
          ></Callout>
          <CodeBlock props={htmlContent[12]} type="bash"></CodeBlock>
          <p>
            Now that's out of the way, we can make an SSH connection to our
            switch by entering the following command. Specifying the user will
            prompt you for the associated password.
          </p>
          <CodeBlock props={htmlContent[13]} type="bash"></CodeBlock>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Disable IP Routing */}
        <div>
          <h3 id="disable-ip-routing" className="text-accent">
            Disable IP Routing
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            The HP 2915 is capable of routing IPv4 traffic between port-based
            VLANs so long as the “IP Routing” setting is enabled; however, for
            security's sake, we're sending all of our switch's traffic to our
            Netgate appliance for routing and policy enforcement. Ensure “IP
            Routing” is set to “Disabled” and save your changes.
          </p>
          <div className="text-white bg-subtle path">
            &nbsp;Menu&nbsp;<span className="text-accent">{">"}</span>&nbsp;IP
            Configuration
          </div>
          <ToggleImage params={images["10"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Factory Reset */}
        <div>
          <h3 id="factory-reset" className="text-accent">
            Factory Reset
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            There might come a time when you need to completely reset your
            switch's configuration. This is referred to as a “Factory Reset”.
            Perhaps, you forget our Manager password and lock yourself out of
            the switch. I've been there more times than I'd like to admit, so
            it's a good idea to get comfortable with how to factory reset a
            switch. See below for the directions which I've copied from the "HP
            2915-8G-PoE Installation and Getting Started Guide".
          </p>
          <p>
            You can restore the factory default configuration either on the
            switch itself, or through the switch console. To execute the factory
            default reset on the switch, perform these steps:
          </p>
          <ol className="orderedList">
            <li>
              Using pointed objects, simultaneously press both the Reset and
              Clear buttons on the front of the switch. The power and fault
              lights come on.
            </li>
            <li>
              Continue to press the Clear button while releasing the Reset
              button.
            </li>
            <li>
              When the Self Test LED begins to flash, release the Clear button.
              The switch will then complete its self test and begin operating
              with its configuration restored to the factory default settings.
            </li>
          </ol>
          <p>
            To restore the factory default configuration using the console,
            execute the erase startup-config command from the console command
            prompt:
          </p>
          <CodeBlock props={htmlContent[14]} type="bash"></CodeBlock>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Backup Configuration */}
        <div>
          <h3 id="backup-configuration" className="text-accent">
            Backup Configuration
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            HP made backing up your switch's configuration very easy. My
            preferred way is through the Administrative Web User Interface (UI).
            To access your switch's Web UI, first ensure that your Lab PC is
            connected to your switch's Management interface and that your Lab
            PC's IP address (i.e.,{" "}
            <span className="text-accent bg-subtle path">192.168.40.254</span>)
            is within the Management VLAN subnet (i.e.,
            <span className="text-accent bg-subtle path">192.168.40.0/24</span>
            ). Then, simply type in your switch's IP address into your browser's
            navigation bar hit "Enter". Log in with your "Management"
            credentials and navigate to the below path within the UI. Once
            there, simply select the configuration file you want to back up and
            click “Download”. Save your backup configuration file somewhere safe
            and use it to reinstall your configuration when need be:
          </p>
          <div className="flex flex-col">
            <div className="text-white bg-subtle path">
              &nbsp;Switch&nbsp;<span className="text-accent">{">"}</span>
              &nbsp;System&nbsp;<span className="text-accent">{">"}</span>
              &nbsp;Updates/Downloads&nbsp;
            </div>
            <div className="text-white bg-subtle path">
              <span className="text-accent">{">"}</span>
              &nbsp;Configuration Files and Software Images&nbsp;
            </div>
            <div className="text-white bg-subtle path">
              <span className="text-accent">{">"}</span>
              &nbsp;Configuration File
            </div>
          </div>
          <ToggleImage params={images["17"]}></ToggleImage>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Next Steps */}
        <div>
          <h3 id="next-steps" className="text-accent">
            Next Steps
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <p>
            Congratulations! You've configured your switch and secured it with a
            password-protected management role. You've also locked management
            access down to a single physical interface and restricted inter-VLAN
            routing. Each switch interface is assigned to a single VLAN and each
            VLAN serves a different purpose. Furthermore, all routing takes
            place within our pfSense Netgate appliance and we're securing our
            network traffic with pfSense not only north/south (to and from the
            Internet) but also east/west as well (i.e., traffic between VLANs).
          </p>
          <p>
            At this point, your switch is adequately configured to support your
            lab's requirements and we've kept things pretty simple. We now have
            the core components of our Cloud, but if we want our lab to&nbsp;
            <span className="italic">do</span> anything, then we'll have to add
            a server and a few virtual machines (VMs). The really fun stuff is
            coming up next. Let's get to it!
          </p>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Useful Commands */}
        <div>
          <h3 id="useful-commands" className="text-accent">
            Useful Commands
            <span>
              <Link scroll={true} href="/pages/switch#top">
                <span className={`topScroller text-subtle`}>#</span>
              </Link>
            </span>
          </h3>
          <h4 className="-mt-4">Get Help</h4>
          <CodeBlock props={htmlContent[16]} type="bash"></CodeBlock>
          <h4>Rename the Switch</h4>
          <CodeBlock props={htmlContent[17]} type="bash"></CodeBlock>
          <h4>Show History</h4>
          <CodeBlock props={htmlContent[18]} type="bash"></CodeBlock>
          <h4>Set Default Route</h4>
          <CodeBlock props={htmlContent[19]} type="bash"></CodeBlock>
          <h4>Configure Interfaces</h4>
          <CodeBlock props={htmlContent[20]} type="bash"></CodeBlock>
          <CodeBlock props={htmlContent[21]} type="bash"></CodeBlock>
          <CodeBlock props={htmlContent[22]} type="bash"></CodeBlock>
          <CodeBlock props={htmlContent[23]} type="bash"></CodeBlock>
          <CodeBlock props={htmlContent[24]} type="bash"></CodeBlock>
          <CodeBlock props={htmlContent[25]} type="bash"></CodeBlock>
          <h4>Show MAC Address</h4>
          <CodeBlock props={htmlContent[26]} type="bash"></CodeBlock>
          <h4>Show IP Service</h4>
          <CodeBlock props={htmlContent[27]} type="bash"></CodeBlock>
          <h4>Show ARP Table</h4>
          <CodeBlock props={htmlContent[28]} type="bash"></CodeBlock>
          <h4>Show LLDP Remote Device Information</h4>
          <CodeBlock props={htmlContent[29]} type="bash"></CodeBlock>
          <h4>Show IP Route Entries</h4>
          <CodeBlock props={htmlContent[30]} type="bash"></CodeBlock>
          <h4>Save Configuration</h4>
          <CodeBlock props={htmlContent[31]} type="bash"></CodeBlock>
        </div>
      </section>
      <div className={`rightSidebar`}>
        <NavBar></NavBar>
      </div>
      <div className={`footer`}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Switch;
