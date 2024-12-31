"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./TableOfContents.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

function TableOfContents({ params }) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
  }

  if (!toggled) {
    return (
      <div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* TOC Toggle */}
        <div
          onClick={() => handleClick()}
          className={`${styles.tocCollapsed} bg-primary border border-accent text-accent`}
        >
          <div className={`${styles.tocHeader}`}>
            <FontAwesomeIcon icon={faList} fixedWidth={true}></FontAwesomeIcon>
            Table of Contents
          </div>
          <FontAwesomeIcon icon={faCaretLeft} fixedWidth></FontAwesomeIcon>
        </div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
    );
  }

  if (toggled) {
    return (
      <div>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
        {/* TOC Toggle */}
        <div className={`tocWrapper text-accent`}>
          {/* Image Header */}
          <span
            onClick={() => handleClick()}
            className={`${styles.tocCollapsed} bg-subtle`}
          >
            <div className={`${styles.tocHeader}`}>
              <FontAwesomeIcon icon={faList} fixedWidth></FontAwesomeIcon>
              Table of Contents
              <div className={`${styles.toggleText} text-white`}>
                {params.imageAltText}
              </div>
            </div>
            <FontAwesomeIcon icon={faCaretDown} fixedWidth></FontAwesomeIcon>
          </span>
        </div>
        {/* Table of Contents */}
        <ol className={`orderedList ${styles.toc}`}>
          <li key="1" className="hover:text-accent">
            <Link href="/pages/pfsense#update-default-password">
              Update the Default Password
            </Link>
          </li>
          {/* Configuring Physical Interfaces */}
          <li key="2" className="hover:text-accent">
            <Link href="/pages/pfsense#configuring-physical-interfaces">
              Configuring Physical Interfaces
            </Link>
          </li>
          <ol className="secondOrderedList">
            <li key="3" className="hover:text-accent">
              <Link href="/pages/pfsense#wan-interface">
                Port 1 (igc3) — WAN Interface
              </Link>
            </li>
            <li key="4" className="hover:text-accent">
              <Link href="/pages/pfsense#lan-interface">
                Port 2 (igc2) — LAN Interface
              </Link>
            </li>
            <li key="5" className="hover:text-accent">
              <Link href="/pages/pfsense#lab-interface">
                Port 3 (igc1) — Lab Interface
              </Link>
            </li>
            <li key="6" className="hover:text-accent">
              <Link href="/pages/pfsense#guest-interface">
                Port 4 (igc0) — Guest Interface
              </Link>
            </li>
          </ol>
          {/* Configuring Virtual Interfaces */}
          <li key="7" className="hover:text-accent">
            <Link href="/pages/pfsense#configuring-virtual-interfaces">
              Configuring Virtual Interfaces
            </Link>
          </li>
          <ol className="secondOrderedList">
            <li key="8" className="hover:text-accent">
              <Link href="/pages/pfsense#default-vlan-interface">
                VLAN 1 — Default VLAN — Interface
              </Link>
            </li>
            <li key="9" className="hover:text-accent">
              <Link href="/pages/pfsense#services-vlan-interface">
                VLAN 10 — Services VLAN — Interface
              </Link>
            </li>
            <li key="10" className="hover:text-accent">
              <Link href="/pages/pfsense#users-vlan-interface">
                VLAN 20 — Users VLAN — Interface
              </Link>
            </li>
            <li key="11" className="hover:text-accent">
              <Link href="/pages/pfsense#storage-vlan-interface">
                VLAN 30 — Storage VLAN — Interface
              </Link>
            </li>
            <li key="12" className="hover:text-accent">
              <Link href="/pages/pfsense#management-vlan-interface">
                VLAN 40 — Management VLAN — Interface
              </Link>
            </li>
          </ol>
          <li key="13" className="hover:text-accent">
            <Link href="/pages/pfsense#aliases">Aliases</Link>
          </li>
          <li key="14" className="hover:text-accent">
            <Link href="/pages/pfsense#nat-nginx">
              NAT for Nginx Web Server
            </Link>
          </li>
          <li key="15" className="hover:text-accent">
            <Link href="/pages/pfsense#nat-dns-resolver">
              NAT for DNS Resolver
            </Link>
          </li>
          {/* Configuring Physical Interface Firewall Rules */}
          <li key="16" className="hover:text-accent">
            <Link href="/pages/pfsense#configuring-physical-interface-firewall-rules">
              Configuring Physical Interface Firewall Rules
            </Link>
          </li>
          <ol className="secondOrderedList">
            <li key="17" className="hover:text-accent">
              <Link href="/pages/pfsense#port1wan-rules">
                Port 1 (igc3) — Firewall Rules
              </Link>
            </li>
            <li key="18" className="hover:text-accent">
              <Link href="/pages/pfsense#port2lan-rules">
                Port 2 (igc2) — Firewall Rules
              </Link>
            </li>
            <li key="19" className="hover:text-accent">
              <Link href="/pages/pfsense#port3-rules">
                Port 3 (igc1) — Firewall Rules
              </Link>
            </li>
            <li key="20" className="hover:text-accent">
              <Link href="/pages/pfsense#port4-rules">
                Port 4 (igc0) — Firewall Rules
              </Link>
            </li>
          </ol>
          {/* Configuring Virtual Interface Firewall Rules */}
          <li key="21" className="hover:text-accent">
            <Link href="/pages/pfsense#configuring-virtual-interface-firewall-rules">
              Configuring Virtual Interface Firewall Rules
            </Link>
          </li>
          <ol className="secondOrderedList">
            <li key="22" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-default-rules">
                VLAN 1 — Default VLAN — Firewall Rules
              </Link>
            </li>
            <li key="23" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-services-rules">
                VLAN 10 — Services VLAN — Firewall Rules
              </Link>
            </li>
            <li key="24" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-users-rules">
                VLAN 20 — Users VLAN — Firewall Rules
              </Link>
            </li>
            <li key="25" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-storage-rules">
                VLAN 30 — Storage VLAN — Firewall Rules
              </Link>
            </li>
            <li key="26" className="hover:text-accent">
              <Link href="/pages/pfsense#vlan-management-rules">
                VLAN 40 — Management VLAN — Firewall Rules
              </Link>
            </li>
          </ol>
        </ol>
        {/* Divider */}
        <div className="divider border-b border-accent"></div>
      </div>
    );
  }
}

export default TableOfContents;
