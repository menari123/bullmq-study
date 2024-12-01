# Bullmq and Microservices with NestJS

This repository contains examples and studies on how to build an **microservices** using **NestJS** and **BullMQ**. Its purpose is to provide a foundation for learning about orchestrating asynchronous tasks with queues.
---

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)

---

## Introduction

This repository contains two microservices built with NestJS: one using **HTTP** and the other using **TCP** for communication. The integration between these services is orchestrated using **BullMQ** to manage job queues.

You can learn about how to:

- Set up and run microservices with NestJS.
- Create and manage asynchronous queues using BullMQ.

---

## Technologies Used

- **NestJS** – Framework for building microservices.
- **Docker** – For containerizing the services.
- **BullMQ** – For managing queues and asynchronous jobs.
- **Redis** – Used as a broker for BullMQ.

---

## Installation

### Prerequisites

- **Node.js** (recommended version: v18 or higher)
- **Docker** and **Docker Compose** to run containers

### Steps to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/menari123/bullmq-study.git
    ```

2. Navigate to the project directory:
    ```bash
    cd bullmq-study
    ```

3. If you are using **Docker**:
    - Start the containers:
        ```bash
        docker-compose up
        ```

4. If you aren't using **Docker**:
    - Install dependencies:
    ```bash
    npm install
    ```

6. If you aren't using **Docker**:
    - To run the NestJS server (in a separate terminal):
    ```bash
    npm run start:dev
    ```

Now, the project should be running locally.

---

## Usage

- The **HTTP microservice** is available at `http://localhost:3000`.
- The **TCP microservice** is available on port `3001` and can be accessed using a TCP client.

