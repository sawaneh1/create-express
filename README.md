

# create-express

This is a CLI for creating a boilerplate for an Express project. It saves you the pain of starting your Node.js Express application by creating all the necessary files to get you started. It includes basic registration and login functionality with the model and route already set up. It also initializes Git for you.

## Installation

```bash
npm install create-express -g
```

## Usage

### Run:

```bash
create-express --git --install
```

`--git` initializes a Git repository, and `--install` installs all the dependencies for you.

If you don't want to initialize Git yet, simply remove the flag:

```bash
create-express --install
```

If you don’t want to install the dependencies yet, or if you prefer to install them yourself with another tool, just remove the `--install` flag.

