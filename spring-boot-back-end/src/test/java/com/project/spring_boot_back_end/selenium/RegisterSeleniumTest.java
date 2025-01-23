package com.project.spring_boot_back_end.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static org.junit.jupiter.api.Assertions.*;
import java.time.Duration;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.JavascriptExecutor;
import java.util.concurrent.TimeUnit;

public class RegisterSeleniumTest {
  private WebDriver driver;
  private WebDriverWait wait;

  @BeforeEach
  void setUp() {
    WebDriverManager.chromedriver().setup();
    ChromeOptions options = new ChromeOptions();
    options.addArguments("--remote-allow-origins=*");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");

    driver = new ChromeDriver(options);
    driver.manage().window().maximize();
    wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    driver.get("http://localhost:1234/registrar");
  }

  @Test
  void testSuccessfulRegistrationAndLogin() throws InterruptedException {
    wait.until(ExpectedConditions.presenceOfElementLocated(By.name("username"))).sendKeys("testuser123");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.name("nome")).sendKeys("Test User");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.name("email")).sendKeys("test@example.com");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.name("password1")).sendKeys("password123");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.name("password2")).sendKeys("password123");
    TimeUnit.SECONDS.sleep(1);

    WebElement submitButton = driver.findElement(By.cssSelector("button[type='submit']"));
    ((JavascriptExecutor) driver).executeScript("arguments[0].click();", submitButton);

    TimeUnit.SECONDS.sleep(2);

    wait.until(ExpectedConditions.textToBePresentInElementLocated(
        By.cssSelector("div"),
        "Cadastrado com sucesso."));

    driver.get("http://localhost:1234/entrar");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.name("username")).sendKeys("testuser123");
    driver.findElement(By.name("password")).sendKeys("password123");
    driver.findElement(By.cssSelector("button[type='submit']")).click();

    TimeUnit.SECONDS.sleep(2);

  }

  @Test
  void testInvalidUsername() throws InterruptedException {
    driver.findElement(By.name("username")).sendKeys("te");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.cssSelector("button[type='submit']")).click();

    assertTrue(driver.getPageSource().contains("Seu username deve possuir entre 3 e 40 caracteres."));
  }

  @Test
  void testPasswordMismatch() throws InterruptedException {
    driver.findElement(By.name("password1")).sendKeys("password123");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.name("password2")).sendKeys("differentpassword");
    TimeUnit.SECONDS.sleep(1);

    driver.findElement(By.cssSelector("button[type='submit']")).click();

    assertTrue(driver.getPageSource().contains("As senhas não coincidem."));
  }

  @Test
  void testNavigateToLogin() throws InterruptedException {
    driver.findElement(By.cssSelector("a[href='/entrar']")).click();
    TimeUnit.SECONDS.sleep(1);

    assertEquals("http://localhost:1234/entrar", driver.getCurrentUrl());
  }

  @AfterEach
  void tearDown() {
    if (driver != null) {
      driver.quit();
    }
  }
}