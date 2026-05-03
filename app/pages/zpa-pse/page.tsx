import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Callout from "../../components/callout/Callout";
import CodeBlock from "../../components/codeblock/CodeBlock";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import TableOfContents from "../../components/toc/TableOfContents";
import ToggleImage from "../../components/toggleImage/ToggleImage";

function ZpaPrivateServiceEdge() {
  const calloutContent: string[] = [
    "Be sure to define a Trusted Network and then select that same Trusted Network within both the Zscaler Client Connector's Forwarding Profile as well as the Private Service Edge Group. You do not want to set Trusted Network criteria directly on the ZCC Forwarding profile. Instead, create a Trusted Network outside of the Forwarding Profile and then select it for use within the Forwarding Profile.",
  ];
  const htmlContent: string[] = [
    `
    sudo ss -tlnp | grep 443
  `,
    `
    sudo firewall-cmd --list-ports
  `,
    `
    sudo firewall-cmd --zone=public --list-all
  `,
    `
    sudo firewall-cmd --zone=public --add-port=443/tcp --permanent
  `,
    `
    sudo firewall-cmd --reload
  `,
    `
    sudo dnf install zpa-service-edge-26.53.4-1.el8.x86_64.rpm
  `,
    `
    systemctl status zpa-service-edge.service
  `,
    `
    ifconfig
  `,
    `
    cat /etc/resolv.conf
    sudo vi /etc/resolv.conf
  `,
    `
    sudo nmcli con mod ens18 ipv4.addresses "192.168.10.15/24"
    sudo nmcli con mod ens18 ipv4.gateway "192.168.10.1"
    sudo nmcli con mod ens18 ipv4.dns "192.168.10.1"
    sudo nmcli con mod ens18 ipv4.method manual
    sudo nmcli con up ens18
  `,
    `
    sudo systemctl stop zpa-service-edge
  `,
    `
    sudo touch /opt/zscaler/var/service-edge/provision_key
    sudo chmod 644 /opt/zscaler/var/service-edge/provision_key
  `,
    `
    sudo vi /opt/zscaler/var/service-edge/provision_key
  `,
    `
    sudo cat /opt/zscaler/var/service-edge/provision_key
  `,
    `
    sudo systemctl start zpa-service-edge
  `,
  ];
  const images = [
    {
      id: "1",
      imagePath: "/images/zpa-pse-pfsense-vlan-users.webp",
      imageAltText: "PfSense Users VLAN Configuration",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "2",
      imagePath:
        "/images/zpa-pse-windows-defender-zcc-to-pse-rule-outbound-rules.webp",
      imageAltText: "Windows Defender Firewall - Outbound Rules",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "3",
      imagePath: "/images/zpa-pse-proxmox-iso-images.webp",
      imageAltText: "Proxmox Virtual Environment - ISO Images",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "4",
      imagePath: "/images/zpa-pse-proxmox-hardware.webp",
      imageAltText: "Proxmox Virtual Environment - Hardware",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "5",
      imagePath: "/images/zpa-pse-proxmox-options.webp",
      imageAltText: "Proxmox Virtual Environment - Options",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "6",
      imagePath: "/images/zpa-pse-rhel-firewalld.webp",
      imageAltText: "Confirms if firewalld allows TCP 443 inbound",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "7",
      imagePath: "/images/zpa-pse-rhel-ifconfig.webp",
      imageAltText: "Review network interfaces with ifconfig",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "8",
      imagePath: "/images/zpa-pse-rhel-dns.webp",
      imageAltText: "Review and edit DNS settings with resolv.conf",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "9",
      imagePath: "/images/zpa-pse-trusted-network.webp",
      imageAltText: "Configure a Trusted Network",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "10",
      imagePath: "/images/zpa-pse.webp",
      imageAltText: "Zscaler Private Service Edge",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "11",
      imagePath: "/images/zpa-pse-service-edge-groups.webp",
      imageAltText: "Zscaler Private Service Edge Groups",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "12",
      imagePath: "/images/zpa-pse-redirection-policy.webp",
      imageAltText: "Zscaler Redirection Policy",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "13",
      imagePath: "/images/zpa-pse-connected.webp",
      imageAltText: "Zscaler Connected in ZPA Admin Portal",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "14",
      imagePath: "/images/zpa-pse-zcc-connected.webp",
      imageAltText: "ZCC Connected to PSE",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "15",
      imagePath:
        "/images/zpa-pse-windows-defender-zcc-to-pse-rule-general-tab.webp",
      imageAltText: "Windows Defender Firewall - General Tab",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "16",
      imagePath:
        "/images/zpa-pse-windows-defender-zcc-to-pse-rule-protocols-tab.webp",
      imageAltText: "Windows Defender Firewall - Protocols Tab",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "17",
      imagePath:
        "/images/zpa-pse-windows-defender-zcc-to-pse-rule-scope-tab.webp",
      imageAltText: "Windows Defender Firewall - Scope Tab",
      width: 0,
      height: 0,
      sizes: "100vw",
      style: { width: "100%", height: "auto" },
      priority: true,
    },
    {
      id: "18",
      imagePath: "/images/blog-post-zpa-pse.webp",
      imageAltText: "ZPA PSE Whiteboard",
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
        <Link scroll={true} href="/pages/zpa-pse#why-pse">
          Why Use PSEs?
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#prerequisites">
          Prerequisites
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#create-rhel-vm">
          Create RHEL Virtual Machine
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#firewalld-outbound">
          Ensure RHEL Firewalld Allows Outbound TCP 443
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#install-pse-rhel">
          Install PSE on RHEL
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#configure-rhel-network">
          Configure Network Settings on RHEL
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#configure-trusted-newtork">
          Configure Trusted Network in ZCC Admin Portal
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#configure-pse-zpa">
          Configure PSE in ZPA Admin Portal
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#upload-provision-key">
          Upload Provisioning Key to PSE
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#zpa-pse-connected">
          Confirm PSE Connected to ZTE
        </Link>
      </li>
      <li className="hover:text-accent">
        <Link scroll={true} href="/pages/zpa-pse#zpa-pse-zcc-connected">
          Confirm Test User Connects to PSE
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
      <div className={`main`}>
        <section className="section motion-preset-focus">
          {/* Title */}
          <h1 id="top" className="text-accent">
            Private Service Edges
          </h1>
          {/* Subtitle */}
          <div>
            <h2>Performant ZTNA</h2>
            <p className="dateStamp text-accent">May 1st, 2026</p>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Headline */}
          <div className="headlineWrapper">
            <p className="headline">
              Zscaler Private Service Edges (PSEs) are, simply put, a way to
              extend Zscaler's security cloud (i.e., the “Zero Trust Exchange”)
              to your locations. PSEs solve multiple use cases. We'll explain
              those use cases later, but the purpose of this particular blog
              post is to demonstrate how PSEs help provide Zero Trust Network
              Access while removing the need to hairpin local traffic to Zscaler
              for policy enforcement.
            </p>
            <div className="pt-4">
              <Image
                src={images[17].imagePath}
                width={images[17].width}
                height={images[17].height}
                sizes={images[17].sizes}
                style={images[17].style}
                alt={images[17].imageAltText}
                priority={images[17].priority}
                quality={100}
                decoding="sync"
                loading="eager"
              ></Image>
            </div>
          </div>
          {/* Post Image */}
          <div className="imageWrapper"></div>
          {/* Table of Contents */}
          <TableOfContents params={toc} length="17"></TableOfContents>
          {/* Why Use PSEs?*/}
          <div>
            <h3 id="why-use-pse" className="text-accent">
              Why Use PSEs?
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <h4 className="-mt-4">Disaster Recovery & Business Continuity</h4>
            <p>
              Many Zscaler customers use PSEs as part of their disaster recovery
              and business continuity initiatives, as PSEs can help broker
              connections to the Zero Trust Exchange in the event of a Zscaler
              datacenter outage. One might imagine a scenario where an
              organization's users typically access Zscaler services through
              Zscaler's Chicago datacenters. In the event of a Zscaler Chicago
              datacenter outage, PSEs can be used to provide access to the
              Zscaler services through a customer's own infrastructure closer to
              the users. Running your own PSEs closer to the users would likely
              mean better performance when compared to redirecting those users
              to another, more distant, Zscaler datacenter (e.g., Atlanta or
              Dallas).
            </p>
            <h4 className="-mt-4">Laws & Regulations</h4>
            <p>
              PSEs are also often used from a regulatory and compliance
              perspective. Often, there are laws or regulations that require
              user traffic to be processed only in authorized geographies. If a
              Zscaler datacenter does not exist in a customer's desired
              geography, PSEs allow the customer to deploy private Zscaler
              Service Edges wherever they wish.
            </p>
            <h4 className="-mt-4">Performance Benefits</h4>
            <p>
              Yet a third reason to extend the Zero Trust Exchange to your
              premise is for performance benefits for on-premise users who hope
              to gain access to local applications and resources without having
              to hairpin their traffic out to the Zero Trust Exchange for policy
              enforcement. If you have recently deployed ZPA and you see no
              performance issues over ZPA, then PSEs aren't necessarily
              recommended. However, if you're experiencing performance issues,
              which does come up from time to time (especially with chatty
              applications), then consider using PSEs for localized policy
              enforcement.
            </p>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Prerequisites */}
          <div>
            <h3 id="prerequisites" className="text-accent">
              Prerequisites
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <h4 className="-mt-4">
              Ensure Network Firewall Allows Outbound TCP 443
            </h4>
            <p>
              Our first prerequisite should be to prepare our network to allow
              the Zscaler Client Connector running on our user's devices to
              communicate with our Private Service Edge. This means ensuring
              that your users can communicate to the Private Service Edge over
              the network on TCP port 443. In my environment, that means
              ensuring that my User VLAN (i.e.,{" "}
              <span className="text-accent bg-subtle path">
                192.168.20.0/24
              </span>{" "}
              ) can communicate with my PSE which lives in my Services VLAN
              (i.e.,{" "}
              <span className="text-accent bg-subtle path">
                192.168.10.0/24
              </span>{" "}
              ) and which has a static IP address of{" "}
              <span className="text-accent bg-subtle path">192.168.10.15</span>.
              This requires a single rule on my pfSense firewall:
            </p>
            <ToggleImage params={images["0"]}></ToggleImage>
            <h4 className="-mt-4">
              Ensure Test Computer Allows Outbound TCP 443
            </h4>
            <p>
              Our second prerequisite will be to ensure that our test user's
              computer doesn't block the outbound request from the Zscaler
              Client Connector to the Private Service Edge over TCP port 443.
              Since my test user's computer runs Windows 10 with Windows
              Defender activated, this means I had to create an outbound Windows
              Defender firewall rule allowing the outbound communication.
            </p>
            <ToggleImage params={images["1"]}></ToggleImage>
            <ToggleImage params={images["14"]}></ToggleImage>
            <ToggleImage params={images["15"]}></ToggleImage>
            <ToggleImage params={images["16"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Create RHEL Virtual Machine */}
          <div>
            <h3 id="create-rhel-vm" className="text-accent">
              Create RHEL Virtual Machine
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <h4 className="-mt-4">Create a Red Hat Developer Account</h4>
            <p>
              Our Private Service Edge will run on a Red Hat Enterprise Linux
              (RHEL) server. If you have RHEL licensing, then you can skip this
              step. If you don't, then the best way I've found to get my hands
              on RHEL for free is to use the Red Hat Developer program:
            </p>
            <p>
              <a
                href="https://developers.redhat.com/"
                className="text-accent"
                target="_blank"
              >
                {" "}
                https://developers.redhat.com/{" "}
              </a>
            </p>
            <h4 className="-mt-4">Download the Latest RHEL Image</h4>
            <p>
              Another perk of using Red Hat's developer program is that you can
              keep track of the RHEL servers you're running from the developer
              portal. Beyond RHEL, you can use Red Hat's developer program to
              familiarize yourself with other amazing Red Hat technologies like
              OpenShift and Ansible. For our purposes, you can simply use the
              above link to register for a developer account and download the
              latest version of Red Hat Enterprise Linux.
            </p>

            {/* Upload RHEL Image to Proxmox */}
            <h4 className="-mt-4">Upload RHEL Image to Proxmox</h4>
            <p>
              Once your RHEL ISO image has downloaded, you can upload it to your
              Proxmox server, or whatever other supported Virtual Environment
              you're running for that matter. I'm using Proxmox in my home lab
              and have downloaded RHEL 10.1 which was the latest version at the
              time of this post.
            </p>
            {/* Create the RHEL VM On Proxmox */}
            <h4 className="-mt-4">Create the RHEL VM On Proxmox</h4>
            <p>
              This blog post won't cover how to create a RHEL VM using Proxmox.
              There are a ton of tutorials on the internet that you can review
              if you're curious. Or just ask your friendly neighborhood chatbot
              to step you through it. One thing's for sure, you'll want to make
              sure you provide your PSEs with enough resources per Zscaler's
              official requirements documentation:
            </p>
            <p>
              <a
                href="https://help.zscaler.com/zpa/service-edge-deployment-prerequisites"
                className="text-accent"
                target="_blank"
              >
                https://help.zscaler.com/zpa/service-edge-deployment-prerequisites
              </a>
            </p>
            <ToggleImage params={images["3"]}></ToggleImage>
            <ToggleImage params={images["4"]}></ToggleImage>
            <ToggleImage params={images["2"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Ensure RHEL Firewalld Allows Outbound TCP 443 */}
          <div>
            <h3 id="firewalld-outbound" className="text-accent">
              Ensure RHEL Firewalld Allows Outbound TCP 443
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <p>
              Once you've created your RHEL virtual machine, you'll need to
              ensure that the host-based firewall (i.e., firewalld) that comes
              enabled by default on RHEL allows inbound requests on TCP 443 so
              that the user's Zscaler Client Connector can communicate with the
              Private Service Edge. From within the RHEL VM's CLI, run the
              following command to confirm whether the PSE is listening on 443:
            </p>
            <CodeBlock props={htmlContent[0]} type="bash"></CodeBlock>
            <p>
              The next command confirms whether the PSE is listening on the
              correct interface.
            </p>
            <CodeBlock props={htmlContent[1]} type="bash"></CodeBlock>
            <p>The third command confirms what firewalld is blocking.</p>
            <CodeBlock props={htmlContent[2]} type="bash"></CodeBlock>
            <p>
              If you've confirmed that your firewalld is blocking (or, simply
              not allowing) TCP 443 inbound, then you can run the following
              commands to allow the required port/protocol inbound:
            </p>
            <CodeBlock props={htmlContent[3]} type="bash"></CodeBlock>
            <p>Finally, we'll reload firewalld.</p>
            <CodeBlock props={htmlContent[4]} type="bash"></CodeBlock>
            <ToggleImage params={images["5"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Install PSE on RHEL */}
          <div>
            <h3 id="install-pse-rhel" className="text-accent">
              Install PSE on RHEL
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <p>
              Zscaler Private Access (ZPA) Private Service Edges (PSE) can be
              deployed in a variety of ways such as on RHEL, in VMWare, in
              Google Cloud, AWS, Azure, on Docker, etc. As I mentioned earlier,
              I'm installing the ZPA PSE on a RHEL virtual machine running in
              Proxmox. Understandably, I followed the{" "}
              <a
                href="https://help.zscaler.com/zpa/private-service-edge-deployment-guide-linux"
                className="text-accent"
                target="_blank"
              >
                Private Service Edge Deployment Guide for Linux
              </a>
              ; however,{" "}
              <a
                href="https://help.zscaler.com/zpa/private-service-edge-management/private-service-edge-deployment-guides-supported-platforms"
                className="text-accent"
                target="_blank"
              >
                Zscaler has numerous guides to help you deploy a Private Service
                Edge
              </a>{" "}
              to your environment of choice.
            </p>
            <p>Install the ZPA PSE using yum:</p>
            <CodeBlock props={htmlContent[5]} type="bash"></CodeBlock>
            <p>
              Once installed, you can confirm the PSE is enabled and active:
            </p>
            <CodeBlock props={htmlContent[6]} type="bash"></CodeBlock>
            <ToggleImage params={images["6"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Configure Network Settings on RHEL */}
          <div>
            <h3 id="configure-rhel-network" className="text-accent">
              Configure Network Settings on RHEL
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <p>
              You'll want to make sure that your new RHEL VM has the appropriate
              IP Address, Default Gateway, and DNS configuration. Let's take a
              look at our VM's network interfaces by issuing the following
              command:
            </p>
            <CodeBlock props={htmlContent[7]} type="bash"></CodeBlock>
            <p>
              Use the{" "}
              <span className="text-accent bg-subtle path">resolv.conf</span>{" "}
              configuration file to review and edit your DNS settings:
            </p>
            <CodeBlock props={htmlContent[8]} type="bash"></CodeBlock>
            <p>
              Use the <span className="text-accent bg-subtle path">nmcli</span>{" "}
              tool to edit your network configuration:
            </p>
            <CodeBlock props={htmlContent[9]} type="bash"></CodeBlock>
            <ToggleImage params={images["6"]}></ToggleImage>
            <ToggleImage params={images["7"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Configure Trusted Network in ZCC Admin Portal */}
          <div>
            <h3 id="configure-trusted-newtork" className="text-accent">
              Configure Trusted Network in ZCC Admin Portal
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <p>
              If Zscaler Client Connector detects that you're on a Trusted
              Network, then we can configure Zscaler Private Access to prefer
              your Private Service Edges over Zscaler Public Service Edges. This
              is exactly the behavior we want for our use case which, in case
              you forgot, is to prevent the need to hairpin traffic from our
              Trusted Network to the Zero Trust Exchange just to come back in to
              access a local application securely. With our PSE in place, and
              our Trusted Network detected by Zscaler Client Connector, our
              user's traffic is directed to our Private Service Edge to broker
              our access through Zscaler Private Access.
            </p>
            <p>
              As of the time of this blog post, you can configure Trusted
              Networks within the Mobile Admin Portal as well as the new
              Experience Center. Configuring Trusted Networks is outside of the
              scope of this post, but the process is easy. You simply create a
              Trusted Network and then use it in your Forwarding Profile—both of
              which are configured in the Mobile Admin Portal/Experience Center.
              As easy as it may be,
              <span>
                {" "}
                <a
                  href="https://help.zscaler.com/zscaler-client-connector/configuring-trusted-networks-zscaler-client-connector"
                  className="text-accent"
                  target="_blank"
                >
                  Zscaler provides step-by-step instructions for configuring
                  Trusted Networks
                </a>
              </span>{" "}
              and they're worth a quick review.
            </p>
            <Callout
              icon={faTriangleExclamation}
              text={calloutContent[0]}
            ></Callout>
            <p>
              Once you've configured your Trusted Network criteria and tested
              that your Zscaler Client Connector is detecting that you're on a
              Trusted Network, then you're ready to configure the Private
              Service Edges in the ZPA Administrator Portal and/or Experience
              Center.
            </p>
            <ToggleImage params={images["8"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Configure PSE in ZPA Admin Portal */}
          <div>
            <h3 id="configure-pse-zpa" className="text-accent">
              Configure PSE in ZPA Admin Portal
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <h4 className="-mt-4">Configure Private Service Edge</h4>
            <p>
              Configuring a Private Service Edge is pretty straight-forward.
              Simply give it a name, description, and enable it and you're about
              half way done. If you're simply interested in using Private
              Service Edges for on-premise users, then there's no need to
              populate the “Public IPs or Domains” or the “Listen IPs”. Select
              or create a Signing Certificate and save your changes.
            </p>
            <ToggleImage params={images["9"]}></ToggleImage>
            <h4 className="-mt-4">Configure Private Service Edge Group</h4>
            <p>
              A Private Service Edge Group must be created or selected when
              creating a Private Service Edge. Grouping PSEs together allows you
              to configure groups of Private Service Edges for specific use
              cases. For instance, you may wish to have a group of Private
              Service Edges at each of your primary locations. You may want to
              group Private Services Edges and give them different update
              schedules to stagger updates and you may even want yet another
              group for Disaster Recovery and Business Continuity purposes. In
              short, Private Service Edge Groups allow you to administer how
              Private Services Edges should be managed and put to use.
            </p>
            <ToggleImage params={images["10"]}></ToggleImage>
            <h4 className="-mt-4">Configure Redirection Policy</h4>
            <p>
              The last piece to configure in ZPA is a Redirection Policy which
              informs ZPA as to when to direct traffic to a Private Service
              Edge. First, you give the Redirection Policy a name and
              description. Then, you must select a “Private Service Edge
              Selection Method” which, for our purposes, will be set to
              “Preferred”. “Default” will use the default selection algorithm.
              “Always” will always chose a Private Service Edge over a Public
              Service Edge (if available). And “Preferred” tells ZPA to prefer
              Private Service Edges over Public Service Edges. Lastly, you
              configure the criteria for the Redirection Policy which basically
              allows you to determine what Client Types, Users, User Groups, and
              Countries to which the Redirection Policy should apply.
            </p>
            <ToggleImage params={images["11"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Upload Provisioning Key to PSE */}
          <div>
            <h3 id="upload-provision-key" className="text-accent">
              Upload Provisioning Key to PSE
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <p>
              With everything in place, it's time to inform our Private Service
              Edge how to connect to the Zero Trust Exchange. We do this by
              giving our PSE a copy of the Provisioning Key which is generated
              when we created our Private Service Edge.
            </p>
            <p>First, stop the Private Service Edge:</p>
            <CodeBlock props={htmlContent[10]} type="bash"></CodeBlock>
            <p>
              Next, create a provisioning key file with 644 permissions, at
              /opt/zscaler/var/service-edge/provision_key:
            </p>
            <CodeBlock props={htmlContent[11]} type="bash"></CodeBlock>
            <p>
              Then, copy the provisioning key from the Zscaler Admin Console,
              paste it into the file, and save.:
            </p>
            <CodeBlock props={htmlContent[12]} type="bash"></CodeBlock>
            <p>Confirm the Provisioning Key was saved properly:</p>
            <CodeBlock props={htmlContent[13]} type="bash"></CodeBlock>
            <p>And don’t forget to restart the Private Service Edge:</p>
            <CodeBlock props={htmlContent[14]} type="bash"></CodeBlock>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Confirm PSE Connected to ZTE */}
          <div>
            <h3 id="zpa-pse-connected" className="text-accent">
              Confirm PSE Connected to ZTE
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <p>
              After a few minutes, the Private Service Edge should show as
              “Connected” in the ZPA Administrator Portal. With the PSE
              successfully connected to ZPA, we can now test that our user, when
              on the appropriate “Trusted Network” is redirected to our ZPA
              Private Service Edge.
            </p>
            <ToggleImage params={images["12"]}></ToggleImage>
            {/* Divider */}
            <div className="divider border-b border-accent"></div>
          </div>
          {/* Confirm Test User Connects to PSE */}
          <div>
            <h3 id="zpa-pse-zcc-connected" className="text-accent">
              Confirm Test User Connects to PSE
              <span>
                <Link scroll={true} href="/pages/zpa-pse#top">
                  <span className={`topScroller text-subtle`}>#</span>
                </Link>
              </span>
            </h3>
            <p>
              With everything in place, we should update our Zscaler Client
              Connector policy by navigating to ZCC / More and clicking “Update
              Policy”. Once ZCC policy has been updated, we should either log
              out of ZPA and then log back in or restart the Zscaler Client
              Connector entirely. I tend to be heavy handed when it comes to
              these sorts of things, so I’ll close out ZCC entirely to give
              myself a fresh test. Once you are reauthenticated, you should
              notice that the “Broker” IP address is now the IP address of your
              Private Service Edge!
            </p>
            <ToggleImage params={images["13"]}></ToggleImage>
          </div>
        </section>
      </div>
      <div className={`rightSidebar`}>
        <NavBar></NavBar>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ZpaPrivateServiceEdge;
