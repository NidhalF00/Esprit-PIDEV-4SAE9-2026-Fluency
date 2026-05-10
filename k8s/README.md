# Fluency Kubernetes Manifests

These files deploy the Fluency project on the one-node KubeAdm VM.
They use the Docker Hub images that were already pushed and keep the setup small for a student demo VM.

## Files

- `namespace.yml`: creates the `fluency` namespace.
- `configmap.yml`: stores non-secret configuration, such as the database name, database user, Eureka URL, CORS origin, and internal service URLs.
- `secret.example.yml`: shows the secret keys the app needs. It contains placeholder values only. Do not commit real secrets.
- `postgres.yml`: creates PostgreSQL with a hostPath PersistentVolume, a PersistentVolumeClaim, a Deployment, and an internal ClusterIP Service named `postgres`.
- `eureka.yml`: creates the Eureka Deployment, the internal ClusterIP Service named `eureka`, and an extra NodePort Service on port `30761` for demo access.
- `user.yml`: creates the User microservice Deployment and internal ClusterIP Service named `user-service`.
- `quiz.yml`: creates the Quiz microservice Deployment and internal ClusterIP Service named `quiz-service`.
- `gateway.yml`: creates the Gateway Deployment and NodePort Service named `gateway` on port `30090`.
- `frontend.yml`: creates the Angular frontend Deployment and NodePort Service named `frontend` on port `30080`.

## Secret Setup

The real Kubernetes Secret must be named `fluency-secrets`.
Do not put real secret values in Git.

Option 1: create the secret directly on the KubeAdm VM:

```bash
kubectl create secret generic fluency-secrets \
  -n fluency \
  --from-literal=DB_PASSWORD='<your-db-password>' \
  --from-literal=JWT_SECRET='<your-long-jwt-secret>' \
  --from-literal=MAIL_USERNAME='<your-mail-username>' \
  --from-literal=MAIL_PASSWORD='<your-mail-password>' \
  --from-literal=GOOGLE_CLIENT_ID='<your-google-client-id>' \
  --from-literal=SPRING_SECURITY_USER_PASSWORD='<your-spring-security-password>'
```

Option 2: copy `secret.example.yml` to `secret.yml` on the KubeAdm VM only, replace the placeholders there, then apply `secret.yml`.

## Copy Files To The KubeAdm VM

If `kubectl` is only installed inside the Ubuntu KubeAdm VM, copy this folder to the VM first.
Replace the username and path with your real VM login:

```bash
scp -r k8s <ubuntu-user>@192.168.33.20:~/fluency-k8s
ssh <ubuntu-user>@192.168.33.20
cd ~/fluency-k8s
```

## Apply Order

Run these commands from the directory that contains the `k8s` folder:

```bash
kubectl apply -f k8s/namespace.yml
kubectl apply -f k8s/configmap.yml
```

Create the real secret manually, or apply a real local `secret.yml` that is not committed:

```bash
kubectl apply -f k8s/secret.yml
```

Then deploy the services:

```bash
kubectl apply -f k8s/postgres.yml
kubectl apply -f k8s/eureka.yml
kubectl apply -f k8s/user.yml
kubectl apply -f k8s/quiz.yml
kubectl apply -f k8s/gateway.yml
kubectl apply -f k8s/frontend.yml
```

## Verify

Check the pods:

```bash
kubectl get pods -n fluency
```

Check the services and NodePorts:

```bash
kubectl get svc -n fluency
```

If a pod is not ready, inspect it:

```bash
kubectl describe pod -n fluency <pod-name>
kubectl logs -n fluency <pod-name>
```

## Test From Windows

Use the KubeAdm VM IP address and the NodePorts:

- Eureka: http://192.168.33.20:30761
- Gateway courses API: http://192.168.33.20:30090/api/courses/all
- Gateway quiz API: http://192.168.33.20:30090/api/quiz/all
- Frontend: http://192.168.33.20:30080

Frontend note: if the Angular app was built with API URLs hardcoded to `localhost:8090`, the frontend page may load while browser API calls still need adjustment later. For the first KubeAdm demo, test the Gateway directly on NodePort `30090`.
