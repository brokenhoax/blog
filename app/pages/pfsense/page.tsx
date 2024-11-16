import React from "react";
import Link from "next/link";
import { faWifiStrong } from "@fortawesome/free-solid-svg-icons";
import Callout from "../../components/callout/Callout";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CodeBlock from "../../components/codeblock/CodeBlock";
import ToggleImage from "../../components/toggleImage/ToggleImage";

interface IProps {
  htmlContent: string[];
  type: string;
}

function PfSense({ htmlContent }: IProps) {
  const calloutContent = [
    "While it is possible to configure our Netgate firewall over a wireless (Wi-Fi) connection, that is outside of the scope of this lab. Also, if your computer does not have an ethernet port, then consider connecting a wireless router to port 2/4 and configure the wireless router (and any client devices connected to it) receive their IP addresses via DHCP from the Netgate firewall. On my router, this requires setting the router’s DHCP setting to bridge mode. Once that’s done, you can connect to the wireless router in order to connect to the management interface. ",
  ];
  const images = [];
  return (
    <div>
      <section className="section">
        {/* Title */}
        <h1 id="top" className="flex text-accent">
          pfSense<span className="pl-4">🧪</span>
        </h1>
        <h2>More than just a firewall</h2>
        <p className="dateStamp text-accent">November 15th, 2024</p>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Headline */}
        <div className="headlineWrapper">
          <p className="headline">
            A core component of our lab will be our Netgate appliance running
            pfSense. Netgate is the official sponsor of the pfSense open-source
            project, so why not use their hardware?
          </p>
          <p className="headline">
            Well, you could save some money by running pfSnense on a dedicated
            and less expensive (but not purpose-built) piece of hardware. This
            might be a good middle ground if your keeping a close eye on your
            budget, but want extra ethernet interfaces.
          </p>
          <p className="headline">
            That said, you could save even more mula by running pfSense in a VM
            on your server, but part of the home lab experience is working with
            hardware. Plus, those extra interfaces on the Netgate appliance I'm
            suggesting (Netgate 4200) will come in handy as your lab grows.
          </p>
          <p className="headline">
            Whatver you decide, it's important to know that our Netgate
            appliance is more than just a firewall. We'll be using it for
            Dynamic DNS for hosting our website as well as for routing, DNS
            resolution, Network Address Translation, and so much more as our use
            cases grow (NTP, DHCP, etc.).
          </p>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Table of Contents */}
        <div>
          <h3 className="text-accent">Table of Contents</h3>
          <ol className="orderedList">
            <li key="1" className="hover:text-accent">
              <Link href="/pages/pfsense#update-default-password">
                Update the Default Password
              </Link>
            </li>
            <li key="2" className="hover:text-accent">
              <Link href="/pages/pfsense#configure-wan-interface">
                Configure the WAN Interface
              </Link>
            </li>
            <li key="3" className="hover:text-accent">
              <Link href="/pages/pfsense#configure-management-interface">
                Configure the Management Interface
              </Link>
            </li>
          </ol>
          {/* Divider */}
          <div className="divider border-b border-accent"></div>
        </div>
        {/* Update the Default Password */}
        <div>
          <div>
            <h3 id="update-default-password" className="text-accent">
              Update the Default Password
              <span>
                <Link scroll={true} href="/pages/pfsense#top" className="link">
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h3>
          </div>
          <p>
            {" "}
            The first change to make to our Netgate (pfSense) firewall is to
            change the default administrator password.
            <a
              href="https://docs.netgate.com/pfsense/en/latest/recipes/changing-credentials.html#user-manager-accounts"
              className="text-accent"
              target="_blank"
            >
              {" "}
              Follow these steps{" "}
            </a>
            from pfSense's documentation to change the default administrator
            password. Once that's taken care of, we'll start configuring our
            firewall policies to support our lab requirements.
          </p>
        </div>
        {/* Configure the WAN Interface */}
        <div>
          <div>
            <h3 id="configure-wan-interface" className="text-accent">
              Configure the WAN Interface
              <span>
                <Link scroll={true} href="/pages/pfsense#top">
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h3>
          </div>
          <p>
            Port 1/4 is reserved for our WAN interface and it should be directly
            connected to our internet modem. Furthermore, this interface should
            be configured to receive it's IP address assignment via Dynamic Host
            Configuration Protocol (DHCP). If your network requirements are
            different (e.g., perhaps, you'd like to assign your Netgate firewall
            WAN interface with a static IP address), then feel free to deviate
            from this lab guide to suit your requirements.
          </p>
        </div>
        {/* Configure the Management Interface */}
        <div>
          <div>
            <h3 id="configure-management-interface" className="text-accent">
              Configure the Management Interface
              <span>
                <Link scroll={true} href="/pages/pfsense#top">
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h3>
          </div>
          <p>
            Port 2/4 is reserved for our management interface and should be
            configured out of the box with a static IP address of 192.168.1.1.
            This interface is effectively our management interface and we will
            hardwire our computer to this port on our Netgate firewall. Don't
            forget to assign your computer with a static IP address within the
            same subnet as the management interface (e.g., 192.168.1.38).
          </p>
        </div>
        {/* Callout */}
        <Callout icon={faWifiStrong} text={calloutContent[0]}></Callout>
      </section>
    </div>
  );
}

export default PfSense;
