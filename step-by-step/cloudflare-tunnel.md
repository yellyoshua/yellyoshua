# Cloudflare Tunnel (Argo Tunnel)
![Cloudflare](https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg)

1. Go to [Cloudflare](https://www.cloudflare.com/) and create an account (free or paid, whatever xdd)

2. Go to [www.cloudflare.com/products/tunnel/](www.cloudflare.com/products/tunnel/) and dowload [Cloudflared CLI](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup)

3. Firts step before create a tunnel, you must login into CLI with the command:

    `cloudflared tunnel login`

4. Before be login, you must create a tunnel with the following command:

    `cloudflared tunnel create <tunnel name>`

5. If you want point you tunnel into your subdomain registered in cloudflare, must run the following command:

    `cloudflared tunnel route dns <tunnel name> <subdomain name>.sample.com`

6. To execute the tunnel pointing to your subdomain, run the following command located below:

    `cloudflared tunnel --url <hostname> run <tunnel name>`

### Glosary

    `<tunnel name>` : Whatever name of tunnel that you want assigned
---
    `<subdomain name>` : It's the same, whatever name for you subdomain. For example: demo.mishop.com
---
    `<hostname>` : It's the url you want to point traffic to your tunnel subdomain. For example, if you have a service/server running locally in port 3000. You must set into `<hostname>` the next value `http://localhost:3000`