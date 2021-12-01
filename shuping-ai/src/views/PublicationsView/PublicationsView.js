import React from 'react';

import PublicationEntry from '../../components/PublicationEntry/PublicationEntry.js';

import '../View.css';
import './PublicationsView.css';

function PublicationsView(){
    return <div className="view">
        <div className="view-col-spacer" />
        <div className="view-main-content">
            <h1>My Publications</h1>
            <p>Check below for a list of my recent publications.</p>
            <div className="publication-list">
                <PublicationEntry
                    isOpen={true}
                    setOpen={() => {}}
                    title="Architecture Support for FPGA Multi-tenancy in the Cloud"
                    authors={["Mbongue, Joel Mandebi", "Shuping, Alexis Maya-Isabelle", "Bhowmik, Pankaj", "Bobda, Christophe"]}
                    abstract="Cloud deployments now increasingly provision FPGA accelerators as part of virtual instances. While FPGAs are still essentially single-tenant, the growing demand for hardware acceleration will inevitably lead to the need for methods and architectures supporting FPGA multi-tenancy. In this paper, we propose an architecture supporting space-sharing of FPGA devices among multiple tenants in the cloud. The proposed architecture implements a network-on-chip (NoC) designed for fast data movement and low hardware footprint. Prototyping the proposed architecture on a Xilinx Virtex Ultrascale + demonstrated near specification maximum frequency for on-chip data movement and high throughput in virtual instance access to hardware accelerators. We demonstrate similar performance compared to single-tenant deployment while increasing FPGA utilization (we achieved 6x higher FPGA utilization with our case study), which is one of the major goals of virtualization. Overall, our NoC interconnect achieved about 2x higher maximum frequency than the state-of-the-art and a bandwidth of 25.6 Gbps."
                    pubDate={new Date("2020-07-10")}
                    publishedIn="2020 IEEE 31st International Conference on Application-specific Systems, Architectures and Processors (ASAP)"
                    paperUrl="https://www.semanticscholar.org/paper/Architecture-Support-for-FPGA-Multi-tenancy-in-the-Mbongue-Shuping/f5b01d3da13e47a78eb65acabdd015b9034ff209"
                    doi="10.1109/ASAP49362.2020.00030"
                />
            </div>
        </div>
    </div>
}

export default PublicationsView;