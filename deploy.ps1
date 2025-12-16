# Deployment Script for TechFlow Landing Page
# This script helps you deploy to GitHub and Vercel

Write-Host "🚀 TechFlow Landing Page Deployment Helper" -ForegroundColor Cyan
Write-Host ""

# Check if git remote exists
$remoteExists = git remote -v 2>$null
if ($remoteExists) {
    Write-Host "Git remote already configured:" -ForegroundColor Yellow
    git remote -v
    Write-Host ""
    $useExisting = Read-Host "Use existing remote? (y/n)"
    if ($useExisting -eq "n" -or $useExisting -eq "N") {
        git remote remove origin 2>$null
    } else {
        Write-Host "Pushing to existing remote..." -ForegroundColor Green
        git push -u origin main
        exit
    }
}

Write-Host "📦 Step 1: Create a GitHub repository" -ForegroundColor Cyan
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: techflow-landing-page (or your preferred name)" -ForegroundColor White
Write-Host "3. Make it Public or Private (your choice)" -ForegroundColor White
Write-Host "4. DO NOT initialize with README, .gitignore, or license" -ForegroundColor Yellow
Write-Host "5. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$repoName = Read-Host "Enter your GitHub repository name (e.g., techflow-landing-page)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    Write-Host "Repository name cannot be empty!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "🔗 Setting up git remote..." -ForegroundColor Cyan
git remote add origin "https://github.com/Priyank0079/$repoName.git" 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote set-url origin "https://github.com/Priyank0079/$repoName.git"
}

Write-Host "✅ Remote configured: https://github.com/Priyank0079/$repoName.git" -ForegroundColor Green
Write-Host ""

Write-Host "📤 Pushing code to GitHub..." -ForegroundColor Cyan
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Step 2: Deploy to Vercel" -ForegroundColor Cyan
    Write-Host "1. Go to: https://vercel.com/new" -ForegroundColor White
    Write-Host "2. Sign in with GitHub" -ForegroundColor White
    Write-Host "3. Click 'Import' next to your repository: $repoName" -ForegroundColor White
    Write-Host "4. Click 'Deploy' (settings are auto-detected)" -ForegroundColor White
    Write-Host "5. Wait 1-2 minutes for deployment" -ForegroundColor White
    Write-Host ""
    Write-Host "🎉 Your site will be live at: https://$repoName.vercel.app" -ForegroundColor Green
    Write-Host ""
    Write-Host "Or deploy via Vercel CLI:" -ForegroundColor Cyan
    Write-Host "  npx vercel --yes" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    Write-Host "Make sure:" -ForegroundColor Yellow
    Write-Host "1. The repository exists at: https://github.com/Priyank0079/$repoName" -ForegroundColor White
    Write-Host "2. You're authenticated with GitHub (git config --global user.name)" -ForegroundColor White
    Write-Host "3. You have push access to the repository" -ForegroundColor White
}

