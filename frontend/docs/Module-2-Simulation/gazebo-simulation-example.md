---
sidebar_label: 'Gazebo Simulation Example'
---

# Gazebo Simulation Example

This page demonstrates how to set up a basic simulation environment for a humanoid robot in Gazebo.

## Basic Gazebo World

Here's a simple Gazebo world file:

```xml
<?xml version="1.0" ?>
<sdf version="1.7">
  <world name="default">
    <include>
      <uri>model://ground_plane</uri>
    </include>

    <include>
      <uri>model://sun</uri>
    </include>

    <!-- Add your robot model -->
    <include>
      <uri>model://simple_humanoid</uri>
      <pose>0 0 1 0 0 0</pose>
    </include>

    <!-- Add a simple obstacle -->
    <model name="box">
      <pose>2 0 1 0 0 0</pose>
      <link name="link">
        <collision name="collision">
          <geometry>
            <box>
              <size>1 1 1</size>
            </box>
          </geometry>
        </collision>
        <visual name="visual">
          <geometry>
            <box>
              <size>1 1 1</size>
            </box>
          </geometry>
          <material>
            <ambient>0.8 0.2 0.2 1</ambient>
            <diffuse>0.8 0.2 0.2 1</diffuse>
          </material>
        </visual>
      </link>
    </model>
  </world>
</sdf>
```

## Launching the Simulation

To launch this simulation with your robot, you would typically create a launch file:

```xml
<launch>
  <!-- Start Gazebo with the world -->
  <include file="$(find gazebo_ros)/launch/empty_world.launch">
    <arg name="world_name" value="$(find my_robot_description)/worlds/my_world.world"/>
  </include>

  <!-- Spawn the robot in Gazebo -->
  <node name="spawn_urdf" pkg="gazebo_ros" type="spawn_model"
        args="-file $(find my_robot_description)/robots/simple_humanoid.urdf
              -urdf -model simple_humanoid
              -x 0 -y 0 -z 1" />

  <!-- Load the robot description parameter -->
  <param name="robot_description"
         command="$(find xacro)/xacro.py $(find my_robot_description)/robots/simple_humanoid.urdf.xacro" />
</launch>
```

## Sensor Simulation

Gazebo can simulate various sensors. Here's an example of adding a depth camera to your URDF:

```xml
<link name="camera_link">
  <visual>
    <geometry>
      <box size="0.05 0.05 0.05"/>
    </geometry>
  </visual>
</link>

<joint name="base_to_camera" type="fixed">
  <parent link="base_link"/>
  <child link="camera_link"/>
  <origin xyz="0.1 0 0.1" rpy="0 0 0"/>
</joint>

<gazebo reference="camera_link">
  <sensor type="depth" name="camera">
    <always_on>true</always_on>
    <visualize>true</visualize>
    <update_rate>30.0</update_rate>
    <camera name="head">
      <horizontal_fov>1.3962634</horizontal_fov>
      <image>
        <format>R8G8B8</format>
        <width>800</width>
        <height>600</height>
      </image>
      <clip>
        <near>0.05</near>
        <far>3</far>
      </clip>
    </camera>
    <plugin name="camera_controller" filename="libgazebo_ros_openni_kinect.so">
      <cameraName>camera</cameraName>
      <alwaysOn>true</alwaysOn>
      <updateRate>10</updateRate>
      <imageTopicName>rgb/image_raw</imageTopicName>
      <depthImageTopicName>depth/image_raw</depthImageTopicName>
      <pointCloudTopicName>depth/points</pointCloudTopicName>
      <cameraInfoTopicName>rgb/camera_info</cameraInfoTopicName>
      <frameName>camera_depth_optical_frame</frameName>
      <baseline>0.1</baseline>
      <distortion_k1>0.0</distortion_k1>
      <distortion_k2>0.0</distortion_k2>
      <distortion_k3>0.0</distortion_k3>
      <distortion_t1>0.0</distortion_t1>
      <distortion_t2>0.0</distortion_t2>
      <pointCloudCutoff>0.4</pointCloudCutoff>
    </plugin>
  </sensor>
</gazebo>
```

:::note
Gazebo simulation is crucial for testing robot behaviors in a safe environment before deploying to real hardware.
:::

:::warning
Always validate that your simulation matches the real-world physics as closely as possible to ensure successful transfer from simulation to reality.
:::