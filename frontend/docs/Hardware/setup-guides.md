---
sidebar_label: 'Hardware Setup Guides'
---

# Hardware Setup Guides

This section provides detailed setup guides for the recommended hardware configurations for Physical AI and robotics applications.

## Setting up NVIDIA RTX 4070 for Robotics Simulation

### Prerequisites
- Compatible motherboard with PCIe 4.0 x16 slot
- Sufficient power supply (recommended: 750W+)
- Adequate cooling solution
- Supported operating system (Ubuntu 20.04/22.04 LTS or Windows 10/11)

### Installation Steps

1. **Physical Installation**
   - Power off your system and disconnect all cables
   - Remove the appropriate PCIe slot cover
   - Carefully insert the RTX 4070 into the PCIe x16 slot
   - Secure with the mounting bracket
   - Connect required power cables (typically 1-2 8-pin connectors)

2. **Driver Installation**
   - Download the latest NVIDIA driver (version 535 or later recommended)
   - For Ubuntu: `sudo apt install nvidia-driver-535`
   - For Windows: Run the downloaded installer
   - Reboot the system after installation

3. **CUDA Toolkit Installation**
   - Download CUDA toolkit 12.x from NVIDIA
   - For Ubuntu: Follow the .deb installation instructions
   - For Windows: Run the installer with default settings
   - Verify installation: `nvcc --version`

4. **Verification**
   ```bash
   nvidia-smi
   ```
   This should display your GPU information and driver version.

### Isaac Sim Setup

1. **Install Isaac Sim** following NVIDIA's documentation
2. **Configure GPU acceleration** in Isaac Sim settings
3. **Test with a simple simulation** to verify performance

## Setting up Jetson Orin Nano

### Prerequisites
- Jetson Orin Nano Developer Kit
- Micro-USB cable for initial setup
- Ethernet cable (recommended) or Wi-Fi
- 5V/4A power adapter
- MicroSD card (64GB recommended)

### Initial Setup

1. **Prepare the MicroSD Card**
   - Download JetPack SDK from NVIDIA Developer website
   - Use NVIDIA SDK Manager to flash the MicroSD card
   - Insert the card into the Jetson Orin Nano

2. **Physical Connections**
   - Connect the power adapter
   - Connect Ethernet cable for internet access
   - Connect a monitor via HDMI (optional, for initial setup)
   - Connect keyboard/mouse (optional)

3. **First Boot**
   - Power on the Jetson
   - Follow the on-screen setup instructions
   - Connect to Wi-Fi if not using Ethernet
   - Update the system: `sudo apt update && sudo apt upgrade`

### Software Installation

1. **Install ROS2 (Humble Hawksbill)**
   ```bash
   sudo apt update
   sudo apt install software-properties-common
   sudo add-apt-repository universe
   sudo apt update
   sudo apt install curl -y
   sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
   sudo apt update
   sudo apt install ros-humble-desktop
   ```

2. **Install Isaac ROS Packages**
   - Follow NVIDIA's Isaac ROS installation guide
   - Install hardware-accelerated packages for perception and navigation

3. **Verify Installation**
   ```bash
   source /opt/ros/humble/setup.bash
   ros2 run demo_nodes_cpp talker
   ```

## Optimizing Performance

### For RTX 4070 Workstations
- Enable GPU scheduling in Windows (if applicable)
- Configure appropriate power management settings
- Monitor temperatures during intensive simulations
- Use dedicated GPU for Isaac Sim/graphics rendering

### For Jetson Orin Nano
- Configure power mode for performance vs. efficiency
- Monitor thermal throttling during operation
- Use appropriate cooling solutions for sustained performance
- Optimize ROS2 node configurations for embedded systems

## Troubleshooting

### Common RTX 4070 Issues
- **Driver conflicts**: Clean install of drivers if issues persist
- **Insufficient power**: Verify PSU wattage and connectors
- **Thermal issues**: Check case airflow and GPU cooler installation

### Common Jetson Issues
- **Boot failures**: Verify MicroSD card integrity and power supply
- **Thermal throttling**: Ensure adequate cooling
- **Network connectivity**: Check cable connections and network settings

## Safety and Maintenance

- **Proper grounding**: Ensure your system is properly grounded
- **Thermal management**: Regularly check and clean cooling systems
- **Power considerations**: Use quality power supplies and surge protectors
- **ESD protection**: Use anti-static wrist straps when handling components

:::note
Always refer to manufacturer documentation for the most up-to-date setup procedures and compatibility information.
:::

:::warning
Improper installation can cause hardware damage. If unsure, consult with a professional or experienced technician.
:::