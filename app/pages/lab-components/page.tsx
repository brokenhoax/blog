import React from "react";
import Link from "next/link";
import CodeBlock from "../../components/codeblock/CodeBlock";
import ToggleImage from "../../components/toggleImage/ToggleImage";

interface IProps {
  htmlContent: string[];
  type: string;
}

function LabContents({ htmlContent }: IProps) {
  htmlContent = [
    `
    staticIPs = {
      "ubuntuWebServer": "192.168.10.4",
      "rhelAppConnectorServer": "192.168.10.5",
      "cyberPanelServer": "192.168.10.6",
      "rhelPrivateServiceEdgeServer": "192.168.10.7",
      "windowsServer2022": "192.168.10.8"
    }
    `,
  ];
  const images = [
    {
      id: "1",
      imagePath: "/images/network_diagram.png",
      imageAltText: "Network Diagram",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
  ];
  return (
    <div>
      <section className="section">
        {/* Title */}
        <h1 id="top" className="text-accent">
          Lab: Components
        </h1>
        <p className="dateStamp">October 31st, 2024</p>
        {/* Divider */}
        <div className="divider darkOwl:border-b border-accent"></div>
        {/* Headline */}
        <div className="headline space-y-2">
          <p>
            The lab environment is something anybody with a fairly modern
            computer, ~$1K, a home internet connection and some
            stick-to-itiveness can build for themselves in about a weekend.
          </p>
          <p>
            In this lab, we will set up a personal, on-site cloud that hosts one
            public-facing web server and one private web server. No static
            private IP address is required for the public-facing web server
            since we'll be using the Cloudflare API and Dynamic DNS (DDNS) on
            the Netgate firewall to automatically update our Cloudflare DNS zone
            with our dynamic private IP address.
          </p>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* Table of Contents */}
        <div>
          <h2 className="text-accent">Table of Contents</h2>
          <ol className="orderedList tableOfContents">
            <li key="1" className="hover:text-accent">
              <Link href="/pages/lab-components#hardware-used">
                Hardware Used
              </Link>
            </li>
            <li key="2" className="hover:text-accent">
              <Link href="/pages/lab-components#software-used">
                Software Used
              </Link>
            </li>
            <li key="3" className="hover:text-accent">
              <Link href="/pages/lab-components#services-used">
                Services Used
              </Link>
            </li>
            <li key="4" className="hover:text-accent">
              <Link href="/pages/lab-components#static-ips">Static IPs</Link>
            </li>
            <li key="5" className="hover:text-accent">
              <Link href="/pages/lab-components#network-diagram">
                Network Diagram
              </Link>
            </li>
          </ol>
          {/* Divider */}
          <div className="divider darkOwl:border-b border-accent"></div>
        </div>
        {/* Hardware Used */}
        <div>
          <div>
            <h2 id="hardware-used" className="text-accent">
              Hardware Used
              <span>
                <Link
                  scroll={true}
                  href="/pages/lab-components#top"
                  className="link"
                >
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h2>
          </div>
          <p>
            The following hardware requirements must be met or exceeded to
            complete the lab:
          </p>
          <ul className="unorderedList pt-4">
            <li>Modem</li>
            <li>Wireless Router</li>
            <li>Netgate Firewall</li>
            <li>Server</li>
            <li>Personal Computer</li>
            <li>8GB+ USB Flash Drive</li>
          </ul>
        </div>
        {/* Software Used */}
        <div>
          <div>
            <h2 id="software-used" className="text-accent">
              Software Used
              <span>
                <Link
                  scroll={true}
                  href="/pages/lab-components#top"
                  className="link"
                >
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h2>
          </div>
          <p>
            The following software requirements must be met or exceeded to
            complete the lab:
          </p>
          <ul className="unorderedList pt-4">
            <li>Rufus</li>
            <li>Proxmox</li>
            <li>Ubuntu Desktop</li>
            <li>Red Hat Enterprise Linux Server</li>
            <li>Netgate Firewall</li>
            <li>React (create-react-app)</li>
            <li>Nginx </li>
          </ul>
        </div>
        {/* Services Used */}
        <div>
          <div>
            <h2 id="services-used" className="text-accent">
              Services Used
              <span>
                <Link
                  scroll={true}
                  href="/pages/lab-components#top"
                  className="link"
                >
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h2>
          </div>
          <p>
            The following service provided requirements must be met or exceeded
            to complete the lab:
          </p>
          <ul className="unorderedList pt-4">
            <li>Internet Access with a dynamic private IP address</li>
            <li>Domain (registered with Cloudflare Registrar)</li>
            <li>Okta Developer Environment</li>
            <li>Zscaler Private Access</li>
            <li>Zscaler Internet Access</li>
          </ul>
        </div>
        {/* Static IPs */}
        <div>
          <div>
            <h2 id="static-ips" className="text-accent">
              Static IPs
              <span>
                <Link
                  scroll={true}
                  href="/pages/lab-components#top"
                  className="link"
                >
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h2>
          </div>
          {/* Code Snippet */}
          <CodeBlock props={htmlContent[0]} type="JSON"></CodeBlock>
        </div>
        {/* Network Diagram */}
        <div>
          <div>
            <h2 id="network-diagram" className="text-accent">
              Network Diagram
              <span>
                <Link
                  scroll={true}
                  href="/pages/lab-components#top"
                  className="link"
                >
                  {" "}
                  #{" "}
                </Link>
              </span>
            </h2>
          </div>
          <ToggleImage params={images["0"]}></ToggleImage>
        </div>
      </section>
    </div>
  );
}

export default LabContents;
