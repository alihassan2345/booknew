---
sidebar_label: 'Edge Computing Kits'
---

# Edge Computing Kits

This section compares different edge computing platforms for robotics applications, particularly for running AI models on humanoid robots.

## Hardware Comparison Table

| Platform | Jetson Orin Nano | Jetson Orin NX | NVIDIA Jetson AGX Orin |
|----------|------------------|----------------|------------------------|
| GPU | 2048 CUDA cores | 1024 CUDA cores | 2048 CUDA cores |
| CPU | ARM Cortex-A78AE (8-core) | ARM Cortex-A78AE (8-core) | ARM Cortex-A78AE (12/16-core) |
| Memory | 4/8GB LPDDR5 | 8GB LPDDR5 | 16/32GB LPDDR5 |
| Power | 7W - 15W | 10W - 25W | 30W - 60W |
| AI Performance | 27 TOPS | 50 TOPS | 275 TOPS |
| Price | ~$300-400 | ~$400-500 | ~$700-1000 |

## Detailed Specifications

### Jetson Orin Nano (Recommended)

The **Jetson Orin Nano** is the recommended platform for humanoid robotics applications due to its balance of performance and power efficiency.

**Specifications:**
- GPU: NVIDIA Ampere architecture with 2048 CUDA cores
- CPU: ARM Cortex-A78AE 64-bit 8-core processor
- Memory: 4GB or 8GB LPDDR5 memory
- Power: 7W (40W peak) or 15W (60W peak) configurable
- Storage: MicroSD card slot
- Connectivity: Gigabit Ethernet, M.2 Key E slot for Wi-Fi/Bluetooth

### Jetson Orin NX

The Jetson Orin NX offers more performance than the Nano:

- Higher power consumption (10W-25W)
- More memory bandwidth
- Better for computationally intensive tasks
- Larger form factor

### NVIDIA Jetson AGX Orin

The high-end option for complex robotics:

- Highest AI performance (275 TOPS)
- Multiple processing units (GPU, CPU, DLA, PVA, ISP, etc.)
- Most expensive option
- Higher power consumption (30W-60W)

## Performance Benchmarks

| Task | Jetson Orin Nano | Jetson Orin NX | Jetson AGX Orin |
|------|------------------|----------------|-----------------|
| YOLOv5s inference | 15 FPS | 25 FPS | 60 FPS |
| VSLAM processing | 20 FPS | 35 FPS | 80 FPS |
| Point cloud processing | 10 Hz | 20 Hz | 50 Hz |
| ROS2 nodes (simultaneous) | 5-8 | 8-12 | 15-20 |

## Use Cases

### Jetson Orin Nano is ideal for:
- Basic perception tasks (object detection, tracking)
- Simple navigation and path planning
- Humanoid robot control (walking, balancing)
- Educational robotics projects

### Jetson Orin NX is ideal for:
- Advanced perception (multi-camera fusion)
- Complex SLAM algorithms
- Multi-modal AI (vision, audio, IMU)
- More sophisticated robot behaviors

### Jetson AGX Orin is ideal for:
- Full autonomous operation
- Complex manipulation tasks
- Real-time neural network training
- High-resolution sensor processing

## Power and Thermal Considerations

All Jetson platforms include:

- Thermal management with active cooling recommended
- Power over Ethernet (PoE) capability on some carrier boards
- Power management for battery-powered robots
- Temperature monitoring and protection

## Software Support

- **JetPack SDK**: Includes CUDA, cuDNN, TensorRT
- **Isaac ROS**: Hardware-accelerated ROS2 packages
- **Isaac Sim**: For simulation and testing
- **ROS/ROS2**: Full support for robotics middleware

:::note
The Jetson Orin Nano provides the best price-to-performance ratio for humanoid robotics applications while maintaining low power consumption suitable for battery-powered robots.
:::

:::warning
Ensure proper thermal management for sustained performance. Consider active cooling solutions for continuous high-load operations.
:::